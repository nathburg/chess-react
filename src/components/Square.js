import { useContext } from 'react';
import { setActivePieceHandler } from '../dispatchers/square';
import { GameContext } from '../game-provider';
import './Square.css';

export default function Square({ coord, color }) {
	const { state, dispatch } = useContext(GameContext);
	return (
		<button
			className={`square ${color}`}
			data-testid={`square-${coord}`}
			id={`${coord}`}
			onClick={() => setActivePieceHandler(dispatch, coord)}
		>
			{state.board[coord].image}
		</button>
	);
}
