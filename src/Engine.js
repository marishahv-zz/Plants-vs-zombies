import { ENTITY_DATA } from './constants';
import { Pea } from './Pea';
/* import { Sunflower } from './Sunflower';
import { Wallnut } from './Wallnut'; */
import { Peashooter } from './Peashooter';

export class Engine {
	create(entityData) {
		let entity = new entityData.type(ENTITY_DATA.MAX_HEALTH, entityData.container);
		entity.create();

		if ( entity instanceof Peashooter) {
			entity.shoot();
		}
	};
}