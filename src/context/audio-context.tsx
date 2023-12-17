import { createContext, useState } from 'react';
import trackList from '../assets/trackList';
import { Track } from '../types';
import { ReactNode } from 'react';

interface AudioProviderProps {
	children: ReactNode;
}

const audio = new Audio();

export const AudioContext = createContext({});

const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
	const [currentTrack, setCurrentTrack] = useState<Track>(trackList[0]);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const handleToggleAudio = (track: Track) => {
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track);
			setIsPlaying(true);
			audio.src = track.src;
			audio.currentTime = 0;
			audio.play();
			return;
		}

		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
		} else {
			audio.play();
			setIsPlaying(true);
		}
	};
	const value = { audio, currentTrack, isPlaying, handleToggleAudio };
	return (
		<AudioContext.Provider value={value}>{children}</AudioContext.Provider>
	);
};

export default AudioProvider;
