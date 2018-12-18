import { PLANT_DATA, SETTINGS } from './constants';

export class Pea {
	constructor(initialContainer, initialPosition) {
		this.position = initialPosition;
		this.initialContainer = initialContainer;
		this.peaDiv = this.create(initialContainer);
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
	}

	move() {
		let rowWidth = parseInt(getComputedStyle(this.initialContainer.parentNode).width);
		let peaWidth = parseInt(getComputedStyle(this.peaDiv).width);
		//let distance = rowWidth - peaWidth;
		let id = setInterval(frame, SETTINGS.INTERVAL);
		let that = this;

		function frame() {
			that.position += PLANT_DATA.PEA_SPEED;

			if (that.position >= rowWidth - peaWidth) {
				clearInterval(id);
				that.delete();
			} else {
				that.peaDiv.style.left = that.position + 'px';
			}

			/* if (distance == 0 ) {
				clearInterval(id);
				that.delete();
			} else if (that.health == 0) {
				clearInterval(id);
			} else {
				container.style.left = distance + 'px';
			} */
		}
	}
}