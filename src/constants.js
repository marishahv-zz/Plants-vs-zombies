import { Michael } from "./Michael";
import { Strong } from "./Strong";

export const ZOMBIE_DATA = {
	MAX_HEALTH: 100,
	HIT_DAMAGE: 10,
	STEP: 1,
	MICHAEL_CSS: 'image-zombie-michael',
	MICHAEL_DIE_CSS: 'image-zombie-michael-die',
	STRONG_CSS: 'image-zombie-strong',
	STRONG_DIE_CSS: 'image-zombie-strong-die',
	TYPE: [Michael, Strong]
};

export const SETTINGS = {
	ROW_COUNT: 5,
	CELL_COUNT: 8,
	INTERVAL: 50
}

export const PLANT_DATA = {
	MAX_HEALTH: 100,
	INITIAL_POINTS: 50,
	SUNFLOWER_POINTS: 25,
	SUNFLOWER_CARD_ID: 'sunflower_card',
	SUNFLOWER_CSS: 'sunflower-img',
	PEA_SHOOTER_POINTS: 100,
	PEA_SHOOTER_CARD_ID: 'pea_shooter_card',
	PEA_SHOOTER_CSS: 'pea-shooter-img',
	WALLNUT_POINTS: 150,
	WALLNUT_CARD_ID: 'wallnut_card',
	WALLNUT_CSS: 'wallnut-img',
	PEA_SPEED: 4,
	PEA_OFFSET_TOP: 36,
	PEA_OFFSET_LEFT: 82
}