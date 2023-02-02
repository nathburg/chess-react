import React from 'react';
import './Square.css';

export default function Square({ coord, color }) {
	return <button className={`square ${color}`} id={`${coord}`}></button>;
}
