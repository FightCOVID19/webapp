import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HowDoYouFeel from './HowDoYouFeel';

configure({ adapter: new Adapter() });

const history = {
  push: () => {},
};


describe('Test How do you feel', () => {
  it('Component is loaded and rendered', () => {
    shallow(<HowDoYouFeel history={history} />);
  });

  it('Test that the function onPressBack calls the props history', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const wrapper = shallow(<HowDoYouFeel history={historyTest} />);
    const inst = wrapper.instance();
    inst.onPressBack();
  });

  it('Test that the function onPressFeelGood calls the props history', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const wrapper = shallow(<HowDoYouFeel history={historyTest} />);
    const inst = wrapper.instance();
    inst.onPressFeelGood();
  });

  it('Test that the function onPressNotFeelGood calls the props history', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const wrapper = shallow(<HowDoYouFeel history={historyTest} />);
    const inst = wrapper.instance();
    inst.onPressNotFeelGood();
  });
});
