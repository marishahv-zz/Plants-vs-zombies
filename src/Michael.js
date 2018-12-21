import { ZOMBIE_DATA } from './constants';
import { Zombie } from './Zombie';

export class Michael extends Zombie {
	constructor(hp, container, events) {
		super(hp, container, events, ZOMBIE_DATA.MICHAEL_CSS, ZOMBIE_DATA.MICHAEL_DIE_CSS);
	}

	get health() {
		let health = super.health();
		if (health < 50) {
			this.hp = 0;

			return 0;
		} else {
			return health;
		}
	}
}