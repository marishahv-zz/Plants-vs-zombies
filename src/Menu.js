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
		this.sunPointsDiv.addEventListener('selectstart', this.disableSelect.bind(this));
		this.sunPointsDiv.addEventListener('select', this.disableSelect.bind(this));

		this.sunPointsDiv.textContent = PLANT_DATA.INITIAL_POINTS;
	}

	drag(ev) {
		if (!ev.target.classList.contains('disabled')) {
			ev.dataTransfer.setData("id", ev.target.id);
		} else {
			ev.preventDefault();
		}
	}

	enable() {
		this.wallnutCardDiv.classList.remove('disabled');
		this.peaShooterCardDiv.classList.remove('disabled');
		this.sunflowerCardDiv.classList.remove('disabled');
	}

	disable() {
		this.wallnutCardDiv.classList.add('disabled');
		this.peaShooterCardDiv.classList.add('disabled');
		this.sunflowerCardDiv.classList.add('disabled');
	}

	disableSelect(ev) {
		ev.preventDefault();
	}
}