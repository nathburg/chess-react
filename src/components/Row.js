import React from 'react';
import Square from './Square';

export default function Row({ rank, isFirstSquareWhite }) {
	const fileArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	const firstColorCurried = (boolean) => {
		if (boolean) return (num) => (num % 2 ? 'black' : 'white');
		else return (num) => (num % 2 ? 'white' : 'black');
	};
	const colorToggler = firstColorCurried(isFirstSquareWhite);
	return (
		<div data-testid={`row-${rank}`}>
			{fileArr.map((file) => (
				<Square
					key={file + rank}
					coord={file + rank}
					color={colorToggler(fileArr.indexOf(file))}
				/>
			))}
		</div>
	);
}
