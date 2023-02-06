import { render, screen } from '@testing-library/react';
import Board from './Board';
import Row from './Row';

test('Board renders 8 rows', () => {
	render(<Board />);
	expect(screen.getAllByTestId(/row/)).toHaveLength(8);
});

test('Board renders 64 squares', () => {
	render(<Board />);
	expect(screen.getAllByTestId(/square/)).toHaveLength(64);
});

// test('activePiece state starts as empty string and becomes id of clicked square', () => {
//   render(<Board />);

// });
