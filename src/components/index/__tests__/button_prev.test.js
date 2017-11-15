import React from 'react';
import { shallow } from 'enzyme';
import ButtonPrev from '../button_prev';

it('renders without crashing', () => {
	const before = "test string";
	const onPageChange = () => {}
  shallow(<ButtonPrev before={before} onPageChange={onPageChange}/>);
});