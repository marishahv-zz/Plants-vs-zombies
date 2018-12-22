import { ZOMBIE_DATA } from './constants';
import { Zombie } from './Zombie';

export class Strong extends Zombie {
	constructor(hp, container) {
		super(hp, container, ZOMBIE_DATA.STRONG_CSS, ZOMBIE_DATA.STRONG_DIE_CSS);
	}

	/* hit(damage) {
		super.hit(damage / 2);
	} */
}