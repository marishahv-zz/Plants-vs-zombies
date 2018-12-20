export class Utils {
	static async pause(time){
		return new Promise((resolve) => {
			setTimeout(resolve, time);
		});
	};

	static triggerEvent(eventCallbacks) {
		for (var i = 0; i < eventCallbacks.length; i++) {
			var eventCallback = eventCallbacks[i];

			eventCallback();
		}
	}
}