import { Utils } from './Utils';
import { AbstractEntity } from './AbstractEntity';

export class Plant extends AbstractEntity {
	constructor(hp, container, imageCSS) {
		super(hp, container, imageCSS);

		this.isDamaged = false;
	}

	delete() {
		while (this.container.firstChild) {
			this.container.removeChild(this.container.firstChild);
		}

		super.delete();
	}
}