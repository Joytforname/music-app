import style from './index.module.scss';
import { useContext, useEffect, useState } from 'react';
import { AudioContext } from '../../context/audio-context';
import { IconButton, Slider } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import trackTimeConverter from '../../utils/secondsToMMSS';

const TimeControls = () => {
	const { audio, currentTrack } =
		useContext(AudioContext);
			const { duration } = currentTrack;
	const [currentTime, setCurrentTime] = useState(0);
	const sliderCurrentTime = Math.round((currentTime / duration) * 100);

	const handleChangeCurrentTime = (_, value) => {
		const time = Math.fround((value / 100) * duration);
		setCurrentTime(time);
		audio.currentTime = time;
	};
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setCurrentTime(audio.currentTime);
		}, 1000);
		return () => {
			clearInterval(timeInterval)
		}
	}, []);

	return (
		<>
			<p>{trackTimeConverter(currentTime)}</p>
			<Slider
				step={1}
				min={0}
				max={100}
				value={sliderCurrentTime}
				onChange={handleChangeCurrentTime}
			/>
		</>
	);
};

const Playbar = () => {
	const { currentTrack, handleToggleAudio, isPlaying } =
		useContext(AudioContext);
	const { title, artists, preview, duration } = currentTrack;

	return (
		<div className={style.playbar}>
			<img
				className={style.preview}
				src={preview}
				alt={`${artists} - ${title}`}
			/>
			<IconButton onClick={() => handleToggleAudio(currentTrack)}>
				{isPlaying ? <Pause /> : <PlayArrow />}
			</IconButton>
			<div className={style.credits}>
				<h4>{title}</h4>
				<p>{artists}</p>
			</div>
			<div className={style.slider}>
				<TimeControls />
				<p>{trackTimeConverter(duration)}</p>
			</div>
		</div>
	);
};

export default Playbar;
