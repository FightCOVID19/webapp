import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WebHome from './index.js';

configure({ adapter: new Adapter() });


describe('Test web home page', () => {
  it('Component is loaded and rendered', () => {
    shallow(<WebHome intl={{}} />);
  });
});
