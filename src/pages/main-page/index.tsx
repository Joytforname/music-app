import { useState } from 'react';
import trackList from '../../assets/trackList';
import TrackElem from '../../components/track';
import style from './index.module.scss';
import { Input } from '@mui/material';

const runSearch = (query: string) => {
	const lowerCaseQuery = query.toLowerCase();
	return query
		? trackList.filter((t) => {
				const trackTitle = (t.title + t.artists).toLocaleLowerCase();
				return trackTitle.includes(lowerCaseQuery);
		})
		: trackList;
};

const MainPage = () => {
	const [tracks, setTracks] = useState(trackList);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTracks(runSearch(event.target.value));
	};
	return (
		<div className={style.search}>
			<Input
				className={style.input}
				placeholder='Search'
				onChange={handleChange}
			/>
			<div className={style.list}>
				{tracks.map((t) => (
					<TrackElem key={t.id} {...t} />
				))}
			</div>
		</div>
	);
};
export default MainPage;
