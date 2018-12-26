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
		this.event = new Event();
		this.menu = menu;
		this.sunflowerCount = 0;
		this.timerID;
		this.isStopped = false;
		this.isZombieGenerated = false;
		this.isSunPointsGenerated = false;
	}

	async createPlant(plantData) {
		let plant = new plantData.type(ENTITY_DATA.MAX_HEALTH, plantData.container);
		
		plant.event = plantData.event;
		this.initPlantEvent(plant, this.plants[plantData.rowIndex]);

		plant.create();
		this.plants[plantData.rowIndex].push(plant);

		if ( plant instanceof Peashooter) {
			await Utils.pause(PLANT_DATA.START_SHOOT_TIMEOUT);
			this.shootByPea(plant, plantData.rowIndex);
		}

		if (plant instanceof Sunflower) {
			if (!this.isSunPointsGenerated) {
				this.generateSunPoints();
				this.isSunPointsGenerated = true;
			}
			this.sunflowerCount++;
		}
	};

	initPlantEvent(plant, plantArr) {
		plant.event.onKilled(plant.delete.bind(plant));
		plant.event.onDeleted(this.removeInstanceFromArr.bind(this, plantArr, plant));
		plant.event.onDeleted(this.deleteInstance.bind(this, plant));
	}

	async createZombie(containers) {
		if (!this.isStopped) {
			let zombieType = ZOMBIE_DATA.TYPE[random(1)];
			let index = random(containers.length - 1);
			let container = containers[index];

			let zombie = new zombieType(ENTITY_DATA.MAX_HEALTH, container);
			this.initZombieEvent(zombie, this.zombies[index]);

			zombie.create();
			this.zombies[index].push(zombie);
		}

		await Utils.pause(ZOMBIE_DATA.CREATE_TIMEOUT);
		this.createZombie(containers);
	}

	initZombieEvent(zombie, zombieArr) {
		let event = new Event();

		event.onKilled(zombie.die.bind(zombie));
		event.onDeleted(this.removeInstanceFromArr.bind(this, zombieArr, zombie));
		event.onDeleted(this.deleteInstance.bind(this, zombie)); 
		zombie.event = event;
	}

	async generateSunPoints() {
		if (!this.isStopped) {
			this.menu.setSunPoints(this.sunflowerCount * PLANT_DATA.SUN_POINTS);
		}

		await Utils.pause(PLANT_DATA.GENERATE_POINTS_TIMEOUT);
		this.generateSunPoints();
	}

	async shootByPea(peashooter, rowIndex) {
		if (!this.isStopped) {
			let pea = peashooter.shoot();
			let event = new Event();

			event.onDeleted(this.removeInstanceFromArr.bind(this, this.peas[rowIndex], pea));
			event.onDeleted(this.deleteInstance.bind(this, pea));
			pea.event = event;

			this.peas[rowIndex].push(pea);
		}

		await Utils.pause(PLANT_DATA.SHOOT_TIMEOUT);
		if (peashooter.health > 0) {
			this.shootByPea(peashooter, rowIndex);
		}
	};

	animate(fieldWidth) {
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
						Utils.triggerEvent(this.event.onGameOverEvt);
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
					if (pea.position >= fieldWidth - pea.width) {
						pea.delete();
					} else {
						pea.move();
					}
				});
			});
		}

		let that = this;
		this.timerID = setInterval(frame, SETTINGS.INTERVAL);
	}
	
	async hitPlant(plant, zombie) {
		if (!this.isStopped) {
			plant.hit(ENTITY_DATA.HIT_DAMAGE);

			if (plant.health <= 0 ) {
				if (plant instanceof Sunflower) {
					this.sunflowerCount--;
				}
				plant.kill();
			}
		}

		if (plant.health > 0 && zombie.health > 0) {
			await Utils.pause(PLANT_DATA.DAMAGE_TIMEOUT);
			this.hitPlant(plant, zombie);
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

	deleteAllEntities() {
		this.clear2DArrayOfEntities(this.zombies);
		this.clear2DArrayOfEntities(this.plants);
		this.clear2DArrayOfEntities(this.peas);

		this.sunflowerCount = 0;
	}

	clear2DArrayOfEntities(entity2DArray) {
		for (let i = 0; i < entity2DArray.length; i++) {
			let rowLength = entity2DArray[i].length;

			while (rowLength > 0) {
				entity2DArray[i][0].delete();
				rowLength--;
			}
		}
	}

	create2DArray() {
		let arr = [];

		for (let i = 0; i < SETTINGS.ROW_COUNT; i++) {
			arr[i] = [];
		}

		return arr;
	}
}