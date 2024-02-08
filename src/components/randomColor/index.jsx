import React, { useState } from 'react';
import './styles.css'

const RandomColor = () => {
	const [color, setColor] = useState('#000000');

	function handleHEXColorClick() {
		const color = `#${parseInt((Math.random() * 16777216)).toString(16).padStart(6, '0').toUpperCase()}`;
		setColor(color);
	}

	function handleRGBColorClick() {
		const color = `rgb(${parseInt((Math.random() * 256))}, ${parseInt((Math.random() * 256))}, ${parseInt((Math.random() * 256))})`;
		setColor(color);
	}

	return (
		<div className="wrapper">
			<button onClick={() => handleHEXColorClick()}>Get random HEX</button>
			<button onClick={() => handleRGBColorClick()}>Get random RGB</button>
			<div className='color' style={{
				'backgroundColor': color,
			}}>
				<span className='text'>{color}</span>
			</div>

		</div>
	);
};

export default RandomColor;