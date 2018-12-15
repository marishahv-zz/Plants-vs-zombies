import {Sunflower} from './Sunflower';

export const ZOMBIE_DATA = {
	MAX_HEALTH: 100,
	HIT_DAMAGE: 10,
	/* DELETE_TIMEOUT: 3500, */
	/* IMAGES: ['ballon.gif', 'michael.gif', 'strong.gif', 'default.gif'],
	IMAGES: [{
		live: 'michael.gif',
		die: 'michael-die.gif'
	}], */
	STEP: 1
};

export const SETTINGS = {
	ROW_COUNT: 5,
	CELL_COUNT: 8,
	INTERVAL: 50
}

export const MENU = {
	INITIAL_POINTS: 50,
	SUNFLOWER_POINTS: 25,
	PEA_SHOOTER_POINTS: 100,
	WALLNUT_POINTS: 150
}

export const PLANT_DATA = {
	sunflower_card: Sunflower
}