import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<h1><Link to="/" replace={true} >redddit</Link></h1>
		</div>
	)
}

export default Header;