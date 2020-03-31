import React from 'react';
import { shallow, configure } from 'enzyme';
import { IconButton } from '@material-ui/core';
import Adapter from 'enzyme-adapter-react-16';
import UnderAge from './UnderAge';

configure({ adapter: new Adapter() });

describe('Test age - underAge component', () => {
  function onPressBack() {}
  it('Component is loaded and rendered', () => {
    shallow(<UnderAge onPressBack={onPressBack} />);
  });

  it('Test that the icon button is shown', () => {
    const wrapper = shallow(<UnderAge onPressBack={onPressBack} />);
    expect(wrapper.find(IconButton).length).toBe(1);
  });

  it('Test that when pressing the icon button the props function onPressBack is called', (done) => {
    function onPressBack() { done(); }
    const wrapper = shallow(<UnderAge onPressBack={onPressBack} />);
    const iconButton = wrapper.find(IconButton);
    iconButton.props().onClick();
  });
});
