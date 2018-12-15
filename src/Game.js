import { SETTINGS, PLANT_DATA } from "./constants";
import {Audio} from './Audio';
import { Menu } from "./Menu";

export class Game {
	constructor() {
		this.audio = new Audio();
		this.menu = new Menu();
		this.playBtn = document.getElementById('play');
		this.init();
	}

	init() {
		//this.playBtn.addEventListener('click', this.start.bind(this));
		this.renderFieldLayout();

		//this.sunflower = new PLANT_DATA.sunflower_card_id();
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
		let data = ev.dataTransfer.getData("text");
		//ev.target.appendChild(document.getElementById(data));
	}

	allowDrop(ev) {
		ev.preventDefault();
	}
}