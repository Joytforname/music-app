import styles from './index.module.scss';
import { Track } from '../../types';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import trackTimeConverter from '../../utils/secondsToMMSS';
import { AudioContext } from '../../context/audio-context';
import { useContext } from 'react';
import cn from 'classnames';

const TrackElem = (track: Track) => {
	const { preview, title, artists, duration } = track;
	const { handleToggleAudio, currentTrack, isPlaying } =
		useContext(AudioContext);
	const isCurrentTrack = currentTrack.id === track.id;
	const convertedDuration = trackTimeConverter(duration);
	return (
		<div className={cn(styles.track, isCurrentTrack && styles.playing)}>
			<IconButton onClick={() => handleToggleAudio(track)}>
				{isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
			</IconButton>
			<img
				className={styles.preview}
				src={preview}
				alt={`${artists} - ${title}`}
			/>
			<div className={styles.credits}>
				<b>{title}</b>
				<p>{artists}</p>
			</div>
			<p>{convertedDuration}</p>
		</div>
	);
};

export default TrackElem;
