import { SETTINGS, PLANT_DATA, ENTITY_DATA } from "./constants";
import {Audio} from './Audio';
import { Menu } from "./Menu";
import { Sunflower } from './Sunflower';
import { Wallnut } from './Wallnut';
import { Peashooter } from './Peashooter';

export class Game {
	constructor() {
		this.audio = new Audio();
		this.menu = new Menu();
		this.playBtn = document.getElementById('play');
		this.init();
	}

	init() {
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

	drop(ev) {
		ev.preventDefault();
		let plantCardID = ev.dataTransfer.getData("id");
		let plant; 

		if (plantCardID == PLANT_DATA.SUNFLOWER_CARD_ID) {
			plant = new Sunflower(ENTITY_DATA.MAX_HEALTH, ev.target);
		} else if (plantCardID == PLANT_DATA.WALLNUT_CARD_ID) {
			plant = new Wallnut(ENTITY_DATA.MAX_HEALTH, ev.target);
		} else if (plantCardID == PLANT_DATA.PEA_SHOOTER_CARD_ID) {
			plant = new Peashooter(ENTITY_DATA.MAX_HEALTH, ev.target);
		}
		
		plant.create();
	}

	allowDrop(ev) {
		ev.preventDefault();
	}
}