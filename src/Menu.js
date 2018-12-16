import {PLANT_DATA} from './constants';

export class Menu {
	constructor() {
		this.container = document.querySelector('.menu');
		this.sunPointsDiv = document.querySelector('.sun-points');
		this.wallnutCardDiv = document.getElementById('wallnut_card');
		this.peaShooterCardDiv = document.getElementById('pea_shooter_card');
		this.sunflowerCardDiv = document.getElementById('sunflower_card');
		this.init();
	}

	init() {
		this.sunflowerCardDiv.addEventListener('dragstart', this.drag.bind(this));
		this.wallnutCardDiv.addEventListener('dragstart', this.drag.bind(this));
		this.peaShooterCardDiv.addEventListener('dragstart', this.drag.bind(this));

		this.sunPointsDiv.textContent = PLANT_DATA.INITIAL_POINTS;
	}

	drag(ev) {
		ev.dataTransfer.setData("id", ev.target.id);
	}
}