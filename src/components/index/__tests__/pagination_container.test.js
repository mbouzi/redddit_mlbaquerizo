import React from 'react';
import { shallow } from 'enzyme';
import ButtonNext from '../button_next';

it('renders without crashing', () => {
	const after = "test string";
	const before = "test string"
	const firstSubm = "test string"
	const onPageChange = () => {}
  shallow(<ButtonNext after={after} before={after} firstSubm={firstSubm} onPageChange={onPageChange}/>);
});