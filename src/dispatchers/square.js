import { setActivePieceAction } from '../actions/square-actions';

export const setActivePieceHandler = (dispatch, body) =>
	dispatch(setActivePieceAction(body));
