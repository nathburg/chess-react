export const setActivePieceAction = (body) => {
	return {
		type: 'set-active-piece',
		activePiece: body,
	};
};
