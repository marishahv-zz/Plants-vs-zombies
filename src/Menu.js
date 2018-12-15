import {MENU} from './constants';

export class Menu {
	constructor() {
		this.container = document.querySelector('.menu');
		this.sunPointsDiv = document.querySelector('.sun-points');
		this.wallnutCardDiv = document.getElementById('wallnut-card');
		this.peaShooterCardDiv = document.getElementById('pea-shooter-card');
		this.sunflowerCardDiv = document.getElementById('sunflower_card');
		this.init();
	}

	init() {
		this.temp = document.getElementById('temp');
		this.temp.addEventListener('drop', this.drop.bind(this));	///////////////////////////
		this.temp.addEventListener('dragover', this.allowDrop.bind(this));	///////////////////////////
		this.sunflowerCardDiv.addEventListener('dragstart', this.drag.bind(this));

		this.sunPointsDiv.textContent = MENU.INITIAL_POINTS;
	}

	allowDrop(ev) {
		ev.preventDefault();
	}

	drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	drop(ev) {
		ev.preventDefault();
		let data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}
}