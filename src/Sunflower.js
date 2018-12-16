import { PLANT_DATA } from './constants';
import { AbstractEntity } from './AbstractEntity';

export class Sunflower extends AbstractEntity {
	constructor(hp, container, events) {
		super(hp, container, events, PLANT_DATA.SUNFLOWER_CSS);
	}
}