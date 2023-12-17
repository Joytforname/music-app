export type Track = {
	id: number;
	src: string;
	preview: string;
	duration: number;
	title: string;
	artists: string;
};

export type AudioContextType = {
	audio: HTMLAudioElement;
	currentTrack: Track;
	isPlaying: boolean;
	handleToggleAudio: (track: Track) => void;
};