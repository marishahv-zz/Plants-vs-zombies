import { PLANT_DATA } from './constants';
import { Utils } from './Utils';

export class Pea {
	constructor(initialContainer) {
		this.position = initialContainer.offsetLeft;
		this.initialContainer = initialContainer;
		this.peaDiv = this.create(initialContainer);
		this.width = this.peaDiv.clientWidth;
		this.event;
	}

	create() {
		let peaDiv = document.createElement('div');

		peaDiv.className = 'pea';
		peaDiv.style.top = PLANT_DATA.PEA_OFFSET_TOP + 'px';
		this.position += PLANT_DATA.PEA_OFFSET_LEFT;
		peaDiv.style.left = this.position + 'px';
		this.initialContainer.appendChild(peaDiv);

		return peaDiv;
	}

	delete() {
		this.peaDiv.remove();

		Utils.triggerEvent(this.event.onDeletedEvt);
	}

	move() {
		this.position += PLANT_DATA.PEA_SPEED;
		this.peaDiv.style.left = this.position + 'px';
	}
}