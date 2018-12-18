import random from 'lodash/random';
import { SETTINGS, PLANT_DATA, ENTITY_DATA, ZOMBIE_DATA } from "./constants";
import {Audio} from './Audio';
import { Menu } from "./Menu";
import { Sunflower } from './Sunflower';
import { Wallnut } from './Wallnut';
import { Peashooter } from './Peashooter';
import { Engine } from './Engine';

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

				cellDiv.addEventListener('drop', this.drop.bind(this));
				cellDiv.addEventListener('dragover', this.allowDrop.bind(this));
			}

			container.appendChild(rowDiv);
		}
	}

	start() {
		let zombie = {};
		zombie.type = ZOMBIE_DATA.TYPE[random(1)];

		this.menu.enable(); 
		//this.engine.create();
	}

	drop(ev) {
		ev.preventDefault();
		
		let plantCardID = ev.dataTransfer.getData("id");
		let plant = {};

		if (plantCardID == PLANT_DATA.SUNFLOWER_CARD_ID) {
			plant.type = Sunflower;
		} else if (plantCardID == PLANT_DATA.WALLNUT_CARD_ID) {
			plant.type = Wallnut;
		} else if (plantCardID == PLANT_DATA.PEA_SHOOTER_CARD_ID) {
			plant.type = Peashooter;
		}

		plant.container = ev.target;
		this.engine.create(plant);
	}

	allowDrop(ev) {
		ev.preventDefault();
	}
}