import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../comments';

it('renders without crashing', () => {
	const match = { isExact: true, params: { id: "t3_7czn23"}, path: "/comments/:id", url: "/comments/t3_7czn23" };
  shallow(<Comments match={match}/>);
});