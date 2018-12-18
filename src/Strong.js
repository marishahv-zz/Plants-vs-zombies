import { AbstractEntity } from './AbstractEntity';
import { ZOMBIE_DATA } from './constants';

export class Strong extends AbstractEntity {
	constructor(hp, container, events) {
		super(hp, container, events, ZOMBIE_DATA.STRONG_CSS);
	}

	hit(damage) {
		super.hit(damage / 2);
	}
}