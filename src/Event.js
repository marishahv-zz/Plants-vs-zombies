export class Event{
	constructor() {
		this.onCreatedEvt = [];
		this.onKilledEvt = [];
		this.onDeletedEvt = [];
		this.onGameOverEvt = [];
	}

	onCreated(callback) {
		this.onCreatedEvt.push(callback);
	};

	onKilled(callback) {
		this.onKilledEvt.push(callback);
	};

	onDeleted(callback) {
		this.onDeletedEvt.push(callback);
	};

	onGameOver(callback) {
		this.onGameOverEvt.push(callback);
	};
}