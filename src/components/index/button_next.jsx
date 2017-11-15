import React from 'react';

const ButtonNext = ({after, onPageChange}) => {
	return (
		<a href=""
			onClick={(e) => {
				e.preventDefault();
				onPageChange({after: after, before: '', count: 6});
			} } >
			next
		</a>
	)
}

export default ButtonNext;