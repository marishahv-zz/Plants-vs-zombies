import { PLANT_DATA } from './constants';
import { Plant } from './Plant';

export class Sunflower extends Plant {
	constructor(hp, container) {
		super(hp, container, PLANT_DATA.SUNFLOWER_CSS);
	}
}