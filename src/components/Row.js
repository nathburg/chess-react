import React from 'react';
import Square from './Square';
import './Row.css';

export default function Row({
	rank,
	isFirstSquareWhite,
	board,
	dispatch,
	activePiece,
}) {
	const fileArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	const firstColorCurried = (boolean) => {
		if (boolean) return (num) => (num % 2 ? 'black' : 'white');
		else return (num) => (num % 2 ? 'white' : 'black');
	};
	const colorToggler = firstColorCurried(isFirstSquareWhite);
	return (
		<div className={'row'} data-testid={`row-${rank}`}>
			{fileArr.map((file) => (
				<Square
					key={file + rank}
					coord={file + rank}
					color={colorToggler(fileArr.indexOf(file))}
					board={board}
					dispatch={dispatch}
					activePiece={activePiece}
				/>
			))}
		</div>
	);
}
