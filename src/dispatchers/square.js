import {
	makeMoveAction,
	setActivePieceAction,
} from '../actions/square-actions';

export const setActivePieceHandler = (dispatch, body) =>
	dispatch(setActivePieceAction(body));

export const makeMoveHandler = (dispatch, body) =>
	dispatch(makeMoveAction(body));
