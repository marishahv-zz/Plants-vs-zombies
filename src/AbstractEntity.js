export class AbstractEntity {
	constructor(hp, container, events, imageCSS) {
		this.hp = hp || constants.ZOMBIE_MAX_HEALTH;
		this.container = container;
		this.events = events;
	}

	create() {
		let hpDiv = document.createElement('div');
		hpDiv.className = 'percent';
		container.appendChild(hpDiv);

		let hpDivInitialWidth = hpDiv.offsetWidth;
		that.renderHp();

		zombieDiv = document.createElement('div');
		zombieDiv.className = 'image';
		zombieDiv.classList.add(imageCSS);
		container.appendChild(zombieDiv);
	}

	renderHp() {
		let carrentWidth = hpDivInitialWidth * this.health / 100;

		hpDiv.style.width = carrentWidth + 'px';
	}

	/* getDamaged(value){
		this.hp -= value;
	} */

	/* get heroState(){
		return (`имя ${this.name} жизни ${this.hp}`);
	} */
}