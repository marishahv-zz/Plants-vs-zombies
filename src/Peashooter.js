import { PLANT_DATA } from './constants';
import { Plant } from './Plant';
import { Pea } from './Pea';

export class Peashooter extends Plant {
	constructor(hp, container) {
		super(hp, container, PLANT_DATA.PEA_SHOOTER_CSS);
	}

	shoot() {
		return new Pea(this.container);
	}
}