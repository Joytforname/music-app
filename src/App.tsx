import MainPage from './pages/main-page';
import Playbar from './components/playbar/index';
import style from './global.module.scss';

const App = () => (
	<div className={style.wrapper}>
		<Playbar />
		<MainPage />
	</div>
);

export default App;
