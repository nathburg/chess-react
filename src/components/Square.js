import React from 'react';
import './Square.css';

export default function Square({ coord, color }) {
	return <button className={`square ${color}`} data-testid={`square-${coord}`} id={`${coord}`}></button>;
}
