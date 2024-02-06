import React, { useState } from 'react';
import data from './data';
import './styles.css'

const Accordian = () => {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSingleSelection(id) {
		setSelected(id === selected ? null : id);
	}

	function handleMultiSelection(id) {
		if (multiple.includes(id)) {
			setMultiple(multiple.filter(item => item !== id));
		} else {
			setMultiple([...multiple, id]);
		}
	}

	return (
		<div className="wrapper">
			<button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi-selection</button>
			<div className='accordian'>
				{
					data && data.length > 0 ? 
					(data.map(item => 
						<div key={item.id} className='item'>
							<div onClick={enableMultiSelection ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className='title'>
								<h3>{item.question}</h3>
								<span>+</span>
							</div>
							{
								selected === item.id || multiple.indexOf(item.id) !== -1 ? 
								<div className='content'>{item.answer}</div>
								: null
							}
						</div>
					)) : (
						<div>No data found!</div>
					)
				}
			</div>

		</div>
	);
};

export default Accordian;