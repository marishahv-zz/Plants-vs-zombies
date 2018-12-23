import random from 'lodash/random';
import { SETTINGS, PLANT_DATA, ZOMBIE_DATA } from "./constants";
import {Audio} from './Audio';
import { Menu } from "./Menu";
import { Sunflower } from './Sunflower';
import { Wallnut } from './Wallnut';
import { Peashooter } from './Peashooter';
import { Engine } from './Engine';
import { Event } from './Event';

export class Game {
	constructor() {
		this.audio = new Audio();	// убрать в файл
		this.menu = new Menu();		// убрать в файл
		this.engine = new Engine();
		this.playBtn = document.getElementById('play');
		this.init();
	}

	init() {
		this.playBtn.addEventListener('click', this.start.bind(this));
		
		this.renderFieldLayout();
	}

	renderFieldLayout() {
		let container = document.querySelector('.grid');
		
		for (let i = 0; i < SETTINGS.ROW_COUNT; i++) {
			let rowDiv = document.createElement('div');
			rowDiv.className = 'row';
			
			for (let j = 0; j < SETTINGS.CELL_COUNT; j++) {
				let cellDiv = document.createElement('div');

				cellDiv.className = 'cell';
				rowDiv.appendChild(cellDiv);
				
				if (j !== SETTINGS.CELL_COUNT - 1) {
					cellDiv.addEventListener('drop', this.drop.bind(this));
					cellDiv.addEventListener('dragover', this.allowDrop.bind(this));
				}

				if (j == SETTINGS.CELL_COUNT - 1) {
					cellDiv.classList.add('zombie-initial-container');
				}
			}

			container.appendChild(rowDiv);
		}
		this.engine.fieldWidth = container.clientWidth;
	}

	start() {
		if (!this.playBtn.classList.contains('disabled')) {
			this.playBtn.classList.add('disabled');
			this.menu.enable();

			let zombieInitialContainers = document.querySelectorAll('.zombie-initial-container');
			this.engine.createZombie(zombieInitialContainers);

			let rowWidth = document.querySelector('.row').clientWidth;
			this.engine.animate(rowWidth);
		}
	}

	drop(ev) {
		if (!ev.target.closest('.cell').hasAttribute('parent')) {
			ev.preventDefault();
			
			let plantCardID = ev.dataTransfer.getData("id");
			let plantData = this.initPlantData(plantCardID, ev.target);
			let currentPoints = parseInt(this.menu.sunPointsDiv.textContent);

			if (currentPoints >= plantData.points) {		//event.onCreate
				this.engine.createPlant(plantData);
				
				ev.target.setAttribute('parent', 'true');
				currentPoints -= plantData.points;
				this.menu.sunPointsDiv.textContent = currentPoints;
			}
		}
	}

	initPlantData(plantCardID, container) {
		let plantData = {};
		let event = new Event();

		event.onDeleted(() => {
			container.removeAttribute('parent');
		});
		plantData.event = event;

		if (plantCardID == PLANT_DATA.SUNFLOWER_CARD_ID) {
			plantData.type = Sunflower;
			plantData.points = PLANT_DATA.SUNFLOWER_POINTS;
		} else if (plantCardID == PLANT_DATA.WALLNUT_CARD_ID) {
			plantData.type = Wallnut;
			plantData.points = PLANT_DATA.WALLNUT_POINTS;
		} else if (plantCardID == PLANT_DATA.PEA_SHOOTER_CARD_ID) {
			plantData.type = Peashooter;
			plantData.points = PLANT_DATA.PEA_SHOOTER_POINTS;
		}

		plantData.container = container;
		plantData.rowIndex = this.getRowIndex(container);

		return plantData;
	}

	getRowIndex(cell) {
		let rows = document.querySelectorAll('.row');
		let index = false;

		rows.forEach((row, rowIndex) => {
			row.contains(cell) ? index = rowIndex : false;
		});

		return index;
	}

	allowDrop(ev) {
		ev.preventDefault();
	}
}