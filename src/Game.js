import random from 'lodash/random';
import { SETTINGS, PLANT_DATA, ZOMBIE_DATA } from "./constants";
import {Audio} from './Audio';
import { Menu } from "./Menu";
import { Sunflower } from './Sunflower';
import { Wallnut } from './Wallnut';
import { Peashooter } from './Peashooter';
import { Engine } from './Engine';
import { Utils } from './Utils';

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
	}

	start() {
		if (!this.playBtn.classList.contains('disabled')) {
			this.playBtn.classList.add('disabled');
			this.menu.enable();

			//await Utils.pause(2000);

			let zombieInitialContainers = document.querySelectorAll('.zombie-initial-container');
			this.engine.createZombie(zombieInitialContainers);

			let rowWidth = document.querySelector('.row').clientWidth;
			this.engine.animate(rowWidth);
		}
	}

	drop(ev) {
		ev.preventDefault();
		
		let plantCardID = ev.dataTransfer.getData("id");
		let plantData = {};

		if (plantCardID == PLANT_DATA.SUNFLOWER_CARD_ID) {
			plantData.type = Sunflower;
		} else if (plantCardID == PLANT_DATA.WALLNUT_CARD_ID) {
			plantData.type = Wallnut;
		} else if (plantCardID == PLANT_DATA.PEA_SHOOTER_CARD_ID) {
			plantData.type = Peashooter;
		}

		plantData.container = ev.target;
		plantData.rowIndex = this.getRowIndex(ev.target);
		this.engine.createPlant(plantData);
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