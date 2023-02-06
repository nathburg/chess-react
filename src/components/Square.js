import { makeMoveHandler, setActivePieceHandler } from '../dispatchers/square';
import './Square.css';

export default function Square({ coord, color, board, dispatch, activePiece }) {
	return (
		<button
			className={`square ${color}`}
			data-testid={`square-${coord}`}
			id={`${coord}`}
			onClick={
				activePiece
					? () => makeMoveHandler(dispatch, coord)
					: () => setActivePieceHandler(dispatch, coord)
			}
		>
			{board[coord].image}
		</button>
	);
}
