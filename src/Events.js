export class Events{
	constructor() {
		this.onCreated = [];
		this.onKilled = [];
		this.onDeleted = [];
	}

	onCreatedEvt(callback){
		this.onCreated.push(callback);
	};

	onKilledEvt(callback) {
		this.onKilled.push(callback);
	};

	onDeletedEvt(callback) {
		this.onDeleted.push(callback);
	}; 
}