import { PLANT_DATA } from './constants';
import { Plant } from './Plant';

export class Wallnut extends Plant {
	constructor(hp, container) {
		super(hp, container, PLANT_DATA.WALLNUT_CSS);
	}

	hit(damage) {
		super.hit(damage / 2);
	}
}