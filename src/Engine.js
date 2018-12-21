import { ENTITY_DATA, PLANT_DATA, ZOMBIE_DATA, SETTINGS } from './constants';
import { Peashooter } from './Peashooter';
import random from 'lodash/random';
import pull from 'lodash/pull';
import { Utils } from './Utils';
import { ZombieEvents } from './ZombieEvents';
import { PlantsEvents } from './PlantsEvents';

export class Engine {
	constructor() {
		this.zombies = this.create2DArray();
		this.plants = this.create2DArray();
		this.peas = this.create2DArray();
		this.zombieEvents = new ZombieEvents();		// ??????????????????
		this.PlantsEvents = new PlantsEvents();		// ??????????????????
	}

	async createPlant(plantData) {
		let plant = new plantData.type(ENTITY_DATA.MAX_HEALTH, plantData.container, this.events);
		plant.create();
		this.plants[plantData.rowIndex].push(plant);

		if ( plant instanceof Peashooter) {

			const shootByPea = async () => {
				let pea = plant.shoot();
				this.peas[plantData.rowIndex].push(pea);

				await Utils.pause(PLANT_DATA.SHOOT_TIMEOUT);
				shootByPea();
			};

			await Utils.pause(2000);
			shootByPea();
		}
	};

	async createZombie(containers) {
		let type = ZOMBIE_DATA.TYPE[random(1)];
		let index = random(containers.length - 1);
		let container = containers[index];

		let zombie = new type(ENTITY_DATA.MAX_HEALTH, container, this.events); //hp, container, events,
		zombie.create();
		this.zombies[index].push(zombie);

		await Utils.pause(5000);

		this.createZombie(containers);
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
			that.zombies.forEach((row, rowIndex) => {
				
				row.forEach(zombie => {
					let nearestPlant = this.getNearestPlant(rowIndex);

					if (nearestPlant && zombie.position - nearestPlant.position <= ENTITY_DATA.HIT_DISTANCE) {
						if (!nearestPlant.isDamaged) {
							nearestPlant.isDamaged = true;
							this.hitPlant(nearestPlant);
						}
					} else {
						zombie.move();
					}
					

					if (zombie.position <= 0) {
						clearInterval(id);
					} /* else {
						zombie.move();
					} */
				});
			});

			that.peas.forEach(row => {
				row.forEach(pea => {
					if (pea.position >= rowWidth - pea.width) {
						pea.delete();
						pull(row, pea);
						pea = null;
						clearInterval(id);
					} else {
						pea.move();
					}
				});
			});
		}

		let that = this;
		let id = setInterval(frame, SETTINGS.INTERVAL);
	}

	async hitPlant(plant) {
		plant.hit(ENTITY_DATA.HIT_DAMAGE);

		if (plant.health > 0 ) {
			await Utils.pause(PLANT_DATA.DAMAGE_TIMEOUT);
			this.hitPlant(plant);
		}

		if (plant.health <= 0 ) {
			plant.kill();
			plant.delete();
		}
	}

	/* kill(entity) {
		entity.kill();
	} */

	getNearestPlant(rowIndex) {
		let nearestPlant;
		let position = 0;

		this.plants[rowIndex].forEach((plant, index, plants) => {
			if (plant.position > position) {
				position = plant.position;
				nearestPlant = plant;
			}
		});

		return nearestPlant;
	}
}
