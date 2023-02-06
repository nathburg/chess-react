import { initialBoard } from '../initial-states/initial-board';

export const initialState = () => {
	return {
		board: initialBoard,
		activePiece: '',
	};
};

const emptySquare = { color: '', piece: '', image: '' };

export const reducer = (state, action) => {
	switch (action.type) {
		case 'set-active-piece':
			return {
				...state,
				activePiece: action.activePiece,
			};
		case 'make-move': {
			const targetSquare = action.targetSquare;
			const piece = state.board[state.activePiece];
			return {
				...state,
				board: {
					...state.board,
					[targetSquare]: piece,
					[state.activePiece]: emptySquare,
				},
				activePiece: '',
			};
		}
		default:
			console.error(`Action type not supported ${action.type}`, action);
			return state;
	}
};
