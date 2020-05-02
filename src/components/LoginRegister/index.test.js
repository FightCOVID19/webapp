import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginRegister from './index.js';

configure({ adapter: new Adapter() });


describe('Test web home page LoginRegister', () => {
  it('Component is loaded and rendered', () => {
    shallow(<LoginRegister intl={{}} />);
  });
});
