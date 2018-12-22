import { ENTITY_DATA, PLANT_DATA, ZOMBIE_DATA, SETTINGS } from './constants';
import { Peashooter } from './Peashooter';
import random from 'lodash/random';
import pull from 'lodash/pull';
import { Utils } from './Utils';
import { Event } from './Event';

export class Engine {
	constructor() {
		this.zombies = this.create2DArray();
		this.plants = this.create2DArray();
		this.peas = this.create2DArray();
		this.fieldWidth;
	}

	async createPlant(plantData) {
		let event = new Event();
		let plant = new plantData.type(ENTITY_DATA.MAX_HEALTH, plantData.container);

		event.onKilled(plant.delete.bind(plant));
		event.onDeleted(this.removeInstanceFromArr.bind(this, this.plants[plantData.rowIndex], plant));
		event.onDeleted(this.deleteInstance.bind(this, plant));
		plant.event = event;

		plant.create();
		this.plants[plantData.rowIndex].push(plant);

		if ( plant instanceof Peashooter) {
			await Utils.pause(2000);

			this.shootByPea(plant, plantData.rowIndex);
		}
	};

	async createZombie(containers) {
		let type = ZOMBIE_DATA.TYPE[random(1)];
		let index = random(containers.length - 1);
		let container = containers[index];

		let zombie = new type(ENTITY_DATA.MAX_HEALTH, container);
		
		let event = new Event();
		event.onKilled(zombie.die.bind(zombie));
		event.onDeleted(this.removeInstanceFromArr.bind(this, this.zombies[index], zombie));
		event.onDeleted(this.deleteInstance.bind(this, zombie));
		zombie.event = event;

		zombie.create();
		this.zombies[index].push(zombie);

		await Utils.pause(ZOMBIE_DATA.CREATE_TIMEOUT);

		this.createZombie(containers);
	}

	async shootByPea(peashooter, rowIndex) {
		let pea = peashooter.shoot();
		let event = new Event();
		event.onDeleted(this.removeInstanceFromArr.bind(this, this.peas[rowIndex], pea));
		event.onDeleted(this.deleteInstance.bind(this, pea));
		pea.event = event;

		this.peas[rowIndex].push(pea);

		await Utils.pause(PLANT_DATA.SHOOT_TIMEOUT);

		if (peashooter.health > 0) {
			this.shootByPea(peashooter, rowIndex);
		}
	};

	create2DArray() {
		var arr = [];

		for (var i = 0; i < SETTINGS.ROW_COUNT; i++) {
			arr[i] = [];
		}

		return arr;
	}

	animate() {
		const frame = () => {
			that.zombies.forEach((row, rowIndex) => {
				
				row.forEach(zombie => {
					let nearestPlant = this.getNearest('plant', this.plants[rowIndex]);

					if (nearestPlant && zombie.position - nearestPlant.position <= PLANT_DATA.HIT_DISTANCE) {
						if (!nearestPlant.isDamaged) {
							nearestPlant.isDamaged = true;
							this.hitPlant(nearestPlant);
						}
					} else if (!zombie.isDying) {
						zombie.move();
					}

					if (zombie.position <= 0) {
						clearInterval(id);
					}
				});
			});

			that.peas.forEach((row, rowIndex) => {
				row.forEach(pea => {

					let nearestZombie = this.getNearest('zombie', this.zombies[rowIndex]);

					if (nearestZombie && nearestZombie.position - pea.position <= ZOMBIE_DATA.HIT_DISTANCE) {
						if (!nearestZombie.isDying) {
							this.hitZombie(nearestZombie);
							pea.delete();
						}
					}
					if (pea.position >= this.fieldWidth - pea.width) {
						pea.delete();
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
		}
	}

	hitZombie(zombie) {
		zombie.hit(ENTITY_DATA.HIT_DAMAGE);

		if (zombie.health <= 0 ) {
			zombie.kill();
		}
	}

	getNearest(instanceStr, instanceArr) {
		let nearestInstance;
		let position = instanceStr == 'plant' ? 0 : this.fieldWidth;

		instanceArr.forEach((instance) => {
			if (instanceStr == 'plant') {
				if (instance.position > position) {
					position = instance.position;
					nearestInstance = instance;
				}
			} else if (instanceStr == 'zombie') {
				if (instance.position < position) {
					position = instance.position;
					nearestInstance = instance;
				}
			}
		});

		return nearestInstance;
	}

	deleteInstance(instance) {
		instance = null;
	}

	removeInstanceFromArr(arr, instance) {
		pull(arr, instance);
	}
}
