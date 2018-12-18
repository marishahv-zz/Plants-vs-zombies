/* function random(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
} */

function triggerEvent(eventCallbacks) {
	for (var i = 0; i < eventCallbacks.length; i++) {
		var eventCallback = eventCallbacks[i];

		eventCallback();
	}
}