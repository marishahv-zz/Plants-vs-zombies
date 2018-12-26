import { SETTINGS, PLANT_DATA } from "./constants";
import {Audio} from './Audio';
import { Menu } from "./Menu";
import { Sunflower } from './Sunflower';
import { Wallnut } from './Wallnut';
import { Peashooter } from './Peashooter';
import { Engine } from './Engine';
import { Event } from './Event';

export class Game {
	constructor() {
		this.engine;
		this.audio = new Audio();
		this.menu = new Menu();
		this.field = document.querySelector('.grid');
		this.titleDiv = document.querySelector('.title');
		this.gameOverDiv = document.querySelector('.game-over');
		this.playBtn = document.getElementById('play');
		this.stopBtn = document.getElementById('stop');
		this.init();
	}

	init() {
		this.playBtn.addEventListener('click', this.play.bind(this));
		this.stopBtn.addEventListener('click', this.stop.bind(this));
	}

	renderFieldLayout() {
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

			this.field.appendChild(rowDiv);
		}
	}

	initGameField() {
		this.titleDiv.classList.add('not-displayed');
		this.gameOverDiv.classList.add('not-displayed');
		this.field.classList.remove('not-displayed');

		if (!this.field.firstElementChild) {
			this.renderFieldLayout();
		}
	}

	play() {
		if (!this.engine) {
			this.engine = new Engine(this.menu);
			this.engine.event.onGameOver(this.gameOver.bind(this));
		}

		this.engine.isStopped = false;

		this.initGameField();

		this.playBtn.classList.add('not-displayed');
		this.stopBtn.classList.remove('not-displayed');
		this.menu.enable();

		if (!this.engine.isZombieGenerated) {
			this.engine.isZombieGenerated = true;

			let zombieInitialContainers = document.querySelectorAll('.zombie-initial-container');
			this.engine.createZombie(zombieInitialContainers);
		}

		let fieldWidth = document.querySelector('.row').clientWidth;
		this.engine.animate(fieldWidth);
	}

	stop() {
		clearInterval(this.engine.timerID);
		this.menu.disable();
		this.playBtn.classList.remove('not-displayed');
		this.stopBtn.classList.add('not-displayed');
		this.engine.isStopped = true;
	}

	drop(ev) {
		if (!ev.target.closest('.cell').hasAttribute('parent')) {
			ev.preventDefault();
			
			let plantCardID = ev.dataTransfer.getData("id");
			let plantData = this.initPlantData(plantCardID, ev.target);
			let currentPoints = parseInt(this.menu.sunPointsDiv.textContent);

			if (this.engine && currentPoints >= plantData.points) {
				this.engine.createPlant(plantData);
			}
		}
	}

	initPlantData(plantCardID, container) {
		let plantData = {};

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
		plantData.event = this.initPlantEvent(container, plantData.points);

		return plantData;
	}

	initPlantEvent(container, points) {
		let event = new Event();

		event.onCreated(() => {
			this.menu.setSunPoints(-points);
			container.setAttribute('parent', 'true');
		});

		event.onDeleted(() => {
			container.removeAttribute('parent');
		});

		return event;
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

	gameOver() {
		this.menu.disable();

		clearInterval(this.engine.timerID);
		this.engine.isStopped = true;
		this.engine.isZombieGenerated = false;
		this.engine.deleteAllEntities();
		this.engine = null;

		this.menu.sunPointsDiv.textContent = PLANT_DATA.INITIAL_POINTS;
		this.stopBtn.classList.add('not-displayed');
		this.playBtn.classList.remove('not-displayed');

		this.field.classList.add('not-displayed');
		this.gameOverDiv.classList.remove('not-displayed');
		this.audio.toggleMusic();
	}
}