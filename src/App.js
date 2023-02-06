import './App.css';
import Board from './components/Board';
import { GameProvider } from './game-provider';

function App() {
	return (
		<div className='App'>
			<GameProvider>
				<Board />
			</GameProvider>
		</div>
	);
}

export default App;
