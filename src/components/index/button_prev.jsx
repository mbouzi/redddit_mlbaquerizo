import React from 'react';

const ButtonPrev = ({before, onPageChange}) => {
	return (
		<a href=""
			onClick={(e) => {
				e.preventDefault();
				onPageChange({before: before, after: '', count: 6});
			} }>
			prev
		</a>
	)
}

export default ButtonPrev;