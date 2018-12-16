import { PLANT_DATA } from './constants';
import { AbstractEntity } from './AbstractEntity';

export class Wallnut extends AbstractEntity {
	constructor(hp, container, events) {
		super(hp, container, events, PLANT_DATA.WALLNUT_CSS);
	}
}