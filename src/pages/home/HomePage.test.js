import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from './HomePage';

configure({ adapter: new Adapter() });

const history = {
  push: () => {},
};


describe('Test home page', () => {
  it('Component is loaded and rendered', () => {
    shallow(<HomePage history={history} />);
  });

  it('Test that the function onPressPatient calls the props history', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const wrapper = shallow(<HomePage history={historyTest} />);
    const inst = wrapper.instance();
    inst.onPressPatient();
  });

  it('Test that the function onPressDoctor calls the props history', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const wrapper = shallow(<HomePage history={historyTest} />);
    const inst = wrapper.instance();
    inst.onPressDoctor();
  });
});
