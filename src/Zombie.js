import { AbstractEntity } from './AbstractEntity';
import { ZOMBIE_DATA } from './constants'
import { Utils } from './Utils';

export class Zombie extends AbstractEntity {
	constructor(hp, parentContainer, imageCSS, dieCSS) {
		let div = document.createElement('div');
		div.className = 'zombie-wrapper';
		parentContainer.appendChild(div);

		super(hp, div, imageCSS);

		this.zombieDiv = div;
		this.dieCSS = dieCSS;
		this.isDying = false;
	}

	move() {
		this.position -= ZOMBIE_DATA.STEP;
		this.zombieDiv.style.left = this.position + 'px';
	}

	kill() {
		let zombieImageDiv = this.zombieDiv.getElementsByClassName(this.imageCSS)[0];

		zombieImageDiv.classList.remove(this.imageCSS);
		super.kill();
	}

	async die() {
		let zombieImageDiv = this.zombieDiv.querySelector('.image');
		
		zombieImageDiv.classList.add(this.dieCSS);
		this.isDying = true;

		await Utils.pause(ZOMBIE_DATA.DELETE_TIMEOUT);
		this.delete();
	}

	delete() {
		this.container.remove();
		super.delete();
	}
}