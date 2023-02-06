import { useReducer } from 'react';
import { initialState, reducer } from '../reducers/chess-game-reducer';
import Row from './Row';
import './Board.css';

export default function Board() {
	const rankArr = [8, 7, 6, 5, 4, 3, 2, 1];
	const [state, dispatch] = useReducer(reducer, initialState());

	return (
		<div className='board'>
			{rankArr.map((rank) => (
				<Row
					key={rank}
					rank={rank}
					isFirstSquareWhite={rankArr.indexOf(rank) % 2 === 0}
					board={state.board}
					dispatch={dispatch}
					activePiece={state.activePiece}
				/>
			))}
		</div>
	);
}
