import { AbstractEntity } from './AbstractEntity';
import { SETTINGS, ZOMBIE_DATA } from './constants'

export class Zombie extends AbstractEntity {
	constructor(hp, parentContainer, events, imageCSS) {
		let div = document.createElement('div');
		div.className = 'zombie-wrapper';
		parentContainer.appendChild(div);

		super(hp, div, events, imageCSS);

		this.zombieDiv = div;
		this.position = parentContainer.offsetLeft;
	}

	move() {
		this.position -= ZOMBIE_DATA.STEP;
		this.zombieDiv.style.left = this.position + 'px';
	}
}