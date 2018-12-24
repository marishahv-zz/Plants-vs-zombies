import { ENTITY_DATA, PLANT_DATA, ZOMBIE_DATA, SETTINGS } from './constants';
import { Peashooter } from './Peashooter';
import { Sunflower } from './Sunflower';
import random from 'lodash/random';
import pull from 'lodash/pull';
import { Utils } from './Utils';
import { Event } from './Event';

export class Engine {
	constructor(menu) {
		this.zombies = this.create2DArray();
		this.plants = this.create2DArray();
		this.peas = this.create2DArray();
		this.menu = menu;
		this.sunflowerCount = 0;
		this.fieldWidth;
	}

	async createPlant(plantData) {
		let plant = new plantData.type(ENTITY_DATA.MAX_HEALTH, plantData.container);

		plantData.event.onKilled(plant.delete.bind(plant));
		plantData.event.onDeleted(this.removeInstanceFromArr.bind(this, this.plants[plantData.rowIndex], plant));
		plantData.event.onDeleted(this.deleteInstance.bind(this, plant));

		plant.event = plantData.event;

		plant.create();
		this.plants[plantData.rowIndex].push(plant);

		if ( plant instanceof Peashooter) {
			await Utils.pause(2000);

			this.shootByPea(plant, plantData.rowIndex);
		}

		if (plant instanceof Sunflower) {
			if (this.sunflowerCount == 0) {
				this.generateSunPoints();
			}
			this.sunflowerCount++;
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

	async generateSunPoints() {
		this.menu.setSunPoints(this.sunflowerCount * PLANT_DATA.SUN_POINTS);

		await Utils.pause(PLANT_DATA.GENERATE_POINTS_TIMEOUT);
		this.generateSunPoints();
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
					let nearestPlant = this.getNearestPlant(this.plants[rowIndex], zombie.position);

					if (nearestPlant) {
						if (!nearestPlant.isDamaged) {
							nearestPlant.isDamaged = true;
							this.hitPlant(nearestPlant, zombie);
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
					let nearestZombie = this.getNearestZombie(this.zombies[rowIndex], pea.position);

					if (nearestZombie) {
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
	
	async hitPlant(plant, zombie) {
		plant.hit(ENTITY_DATA.HIT_DAMAGE);

		if (plant.health > 0 && zombie.health > 0) {
			await Utils.pause(PLANT_DATA.DAMAGE_TIMEOUT);
			this.hitPlant(plant, zombie);
		}

		if (plant.health <= 0 ) {
			plant.kill();

			if (plant instanceof Sunflower) {
				this.sunflowerCount--;
			}
		}
	}

	hitZombie(zombie) {
		zombie.hit(ENTITY_DATA.HIT_DAMAGE);

		if (zombie.health <= 0 ) {
			zombie.kill();
		}
	}

	getNearestPlant(plantArr, zombiePosition) {
		let nearestPlant;

		plantArr.forEach((plant) => {
			let distance = zombiePosition - plant.position;
			if (distance <= PLANT_DATA.HIT_DISTANCE && distance > 0) {
				nearestPlant = plant;
			}
		});

		return nearestPlant;
	}

	getNearestZombie(zombieArr, peaPosition) {
		let nearestZombie;

		zombieArr.forEach((zombie) => {
			let distance = zombie.position - peaPosition;
			if (distance <= ZOMBIE_DATA.HIT_DISTANCE && distance > 0) {
				nearestZombie = zombie;
			}
		});

		return nearestZombie;
	}

	deleteInstance(instance) {
		instance = null;
	}

	removeInstanceFromArr(arr, instance) {
		pull(arr, instance);
	}
}
