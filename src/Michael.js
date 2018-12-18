import { AbstractEntity } from './AbstractEntity';
import { ZOMBIE_DATA } from './constants';

export class Michael extends AbstractEntity {
	constructor(hp, container, events) {
		super(hp, container, events, ZOMBIE_DATA.MICHAEL_CSS);
	}

	get health() {
		if (this.health < 50) {
			this.health = 0;

			return 0;
		} else {
			return this.health;
		}
	}
}