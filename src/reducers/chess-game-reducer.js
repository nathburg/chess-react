import { initialBoard } from '../initial-states/initial-board';

export const initialState = () => {
	return {
		board: initialBoard,
		activePiece: '',
	};
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'set-active-piece':
			console.log('clicked');
			return {
				...state,
				activePiece: action.activePiece,
			};
		default:
			console.error(`Action type not supported ${action.type}`, action);
			return state;
	}
};
