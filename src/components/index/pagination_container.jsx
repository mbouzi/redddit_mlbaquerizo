import React from 'react';
import ButtonPrev from './button_prev';
import ButtonNext from './button_next';

const PaginationContainer = (props) => {
	const isFirstPage = props.firstSubm === props.before;
	let buttonPrev = null;
	if(!isFirstPage) buttonPrev = <ButtonPrev before={props.before} onPageChange={props.onPageChange}/>
	return (
		<div className="pagination-container">
			view more: 
			{buttonPrev}
			<ButtonNext after={props.after} onPageChange={props.onPageChange} />
		</div>
	);
}

export default PaginationContainer;