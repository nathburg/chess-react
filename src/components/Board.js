import Row from './Row';

export default function Board() {
	const rankArr = [8, 7, 6, 5, 4, 3, 2, 1];

	return (
		<div className='row'>
			{rankArr.map((rank) => (
				<Row
					key={rank}
					rank={rank}
					isFirstSquareWhite={rankArr.indexOf(rank) % 2 === 0}
				/>
			))}
		</div>
	);
}
