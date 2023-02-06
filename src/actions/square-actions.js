export const setActivePieceAction = (body) => {
	return {
		type: 'set-active-piece',
		activePiece: body,
	};
};

export const makeMoveAction = (body) => {
	return {
		type: 'make-move',
		targetSquare: body,
	};
};
