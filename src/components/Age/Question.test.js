import React from 'react';
import { shallow, configure } from 'enzyme';
import { Button } from '@material-ui/core';
import Adapter from 'enzyme-adapter-react-16';
import Question from './Question';

configure({ adapter: new Adapter() });

describe('Test age - question component', () => {
  function onPressNo() {}
  function onPressYes() {}
  it('Component is loaded and rendered', () => {
    shallow(<Question onPressNo={onPressNo} onPressYes={onPressYes} />);
  });

  it('Test that the buttons are shown', () => {
    const wrapper = shallow(<Question onPressNo={onPressNo} onPressYes={onPressYes} />);
    expect(wrapper.debug().search('general.yes')).toBeGreaterThan(-1);
    expect(wrapper.debug().search('general.no')).toBeGreaterThan(-1);
    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(2);
  });

  it('Test that when pressing the button Yes the props function onPressYes is called', (done) => {
    function onPressYesTest() { done(); }
    const wrapper = shallow(<Question onPressNo={onPressNo} onPressYes={onPressYesTest} />);
    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(2);
    buttons.forEach((button) => {
      if (button.props().children.props.id === 'general.yes') {
        button.props().onClick();
      }
    });
  });

  it('Test that when pressing the button No the props function onPressNo is called', (done) => {
    function onPressNoTest() { done(); }
    const wrapper = shallow(<Question onPressNo={onPressNoTest} onPressYes={onPressYes} />);
    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(2);
    buttons.forEach((button) => {
      if (button.props().children.props.id === 'general.no') {
        button.props().onClick();
      }
    });
  });
});
