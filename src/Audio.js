export class Audio {
	constructor() {
		this.audioElement = document.getElementById('zombiMusic');
		this.audioElement.volume = 0.5;
		this.audioIconUp = document.querySelector(".fa-volume-up");
		this.audioIconMute = document.querySelector(".fa-volume-mute");
		this.isPlaying = false;
		this.init();
	}

	init() {
		this.audioIconUp.addEventListener('click', this.toggleMusic.bind(this));
		this.audioIconMute.addEventListener('click', this.toggleMusic.bind(this));
	}

	/* play() {
		this.audioElement.play();
		this.changeIcon();
		this.isPlaying = true;
	}

	stop() {
		this.audioElement.pause();
		this.changeIcon();
		this.isPlaying = false;
		//audio.currentTime = 0.0;
	} */

	/* toggle() {
		if (this.isPlaying) {
			this.stop();
		} else {
			this.play();
		}
	} */

	toggleMusic() {
		if (this.isPlaying) {
			this.audioElement.pause();
			this.changeIcon();
			this.isPlaying = false;
		} else {
			this.audioElement.play();
			this.changeIcon();
			this.isPlaying = true;
		}
	}

	changeIcon() {
		this.audioIconUp.classList.toggle("not-displayed");
		this.audioIconMute.classList.toggle("not-displayed");
	}
}