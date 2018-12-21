import { AbstractEntity } from './AbstractEntity';
import { ZOMBIE_DATA } from './constants'
import { Utils } from './Utils';

export class Zombie extends AbstractEntity {
	constructor(hp, parentContainer, events, imageCSS, dieCSS) {
		let div = document.createElement('div');
		div.className = 'zombie-wrapper';
		parentContainer.appendChild(div);

		super(hp, div, events, imageCSS);

		this.zombieDiv = div;
		this.dieCSS = dieCSS;
	}

	move() {
		this.position -= ZOMBIE_DATA.STEP;
		this.zombieDiv.style.left = this.position + 'px';
	}

	kill() {
		super.kill();
		this.zombieDiv.classList.remove(imageCSS);
		this.zombieDiv.classList.add(dieCSS);

		//Utils.triggerEvent(this.events.onKilled);
	}
}