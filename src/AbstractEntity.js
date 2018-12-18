import {ENTITY_DATA} from './constants';

export class AbstractEntity {
	constructor(hp, container, events, imageCSS) {
		this.hp = hp || ENTITY_DATA.MAX_HEALTH;
		this.container = container;
		this.events = events;
		this.imageCSS = imageCSS;
		this.hpDiv = null;
		this.hpDivInitialWidth = 0;
		this.entityDiv = null;
	}

	create() {
		this.hpDiv = document.createElement('div');
		this.hpDiv.className = 'hp-bar';
		this.container.appendChild(this.hpDiv);

		this.hpDivInitialWidth = this.hpDiv.offsetWidth;
		this.renderHp();

		this.entityDiv = document.createElement('div');
		this.entityDiv.className = 'image';
		this.entityDiv.classList.add(this.imageCSS);
		this.container.appendChild(this.entityDiv);
	}

	renderHp() {
		let carrentWidth = this.hpDivInitialWidth * this.health / 100;

		this.hpDiv.style.width = carrentWidth + 'px';
	}

	hit(damage) {
		this.health -= damage;
		this.renderHp();
	}
}