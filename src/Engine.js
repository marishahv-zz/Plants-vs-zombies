import { PLANT_DATA, ZOMBIE_DATA, SETTINGS } from './constants';
import { Peashooter } from './Peashooter';
import random from 'lodash/random';
import pull from 'lodash/pull';
import { Utils } from './Utils';
import { Events } from './Events';

export class Engine {
	constructor() {
		this.zombies = this.create2DArray();
		this.peas = this.create2DArray();
		this.events = new Events();
	}

	async createPlant(plantData) {
		let plant = new plantData.type(PLANT_DATA.MAX_HEALTH, plantData.container, this.events);
		plant.create();

		if ( plant instanceof Peashooter) {
			await Utils.pause(2000);

			let pea = plant.shoot();
			this.peas[plantData.rowIndex].push(pea);
			
		}
	};

	async createZombie(containers) {		// createZombies ??????
		let type = ZOMBIE_DATA.TYPE[random(1)];
		let index = random(containers.length - 1);
		let container = containers[index];

		await Utils.pause(2000);

		let zombie = new type(ZOMBIE_DATA.MAX_HEALTH, container, this.events); //hp, container, events,
		zombie.create();
		this.zombies[index].push(zombie);
	}

	create2DArray() {
		var arr = [];

		for (var i = 0; i < SETTINGS.ROW_COUNT; i++) {
			arr[i] = [];
		}

		return arr;
	}

	animate(rowWidth) {
		const frame = () => {
			that.zombies.forEach(rowElem => {
				rowElem.forEach(zombieElem => {
					if (zombieElem.position <= 0) {
						clearInterval(id);
					} else {
						zombieElem.move();
					}
				});
			});

			that.peas.forEach(rowElem => {
				rowElem.forEach(peaElem => {
					if (peaElem.position >= rowWidth - peaElem.width) {
						peaElem.delete();
						pull(rowElem, peaElem);
						peaElem = null;
						clearInterval(id);
					} else {
						peaElem.move();
					}
				});
			});
		}

		let that = this;
		let id = setInterval(frame, SETTINGS.INTERVAL);
	}
}
