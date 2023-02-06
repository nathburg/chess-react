import { createContext, useMemo, useReducer } from 'react';
import { initialState, reducer } from './reducers/chess-game-reducer';

export const GameContext = createContext({
	state: initialState(),
	dispatch: () => undefined,
});

export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState());
	const contextValue = useMemo(
		() => ({ state, dispatch }),
		[state, dispatch]
	);
	return (
		<GameContext.Provider value={contextValue}>
			{children}
		</GameContext.Provider>
	);
};
