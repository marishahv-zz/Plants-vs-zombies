import { PLANT_DATA } from './constants';
import { AbstractEntity } from './AbstractEntity';
import { Pea } from './Pea';

export class Peashooter extends AbstractEntity {
	constructor(hp, container, events) {
		super(hp, container, events, PLANT_DATA.PEA_SHOOTER_CSS);
	}

	shoot() {
		return new Pea(this.container);
	}
}