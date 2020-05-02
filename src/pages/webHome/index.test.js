import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IconButton } from '@material-ui/core';
import { WebHome } from './index.js';

configure({ adapter: new Adapter() });
const intlMockup = {
  formatMessage: () => (''),
  formatDate: () => (''),
  formatTime: () => (''),
};

const history = {
  push: () => {},
};

describe('Test web home page', () => {
  /**
  * Component is loaded and rendered
  */
  it('Component is loaded and rendered', () => {
    shallow(<WebHome intl={intlMockup} history={history} />);
  });

  /**
  * Test button Facebook: press this button must call the function onPressFacebook
  */
  it('Test button Facebook: press this button must call the function onPressFacebook', () => {
    const wrapper = shallow(<WebHome intl={intlMockup} history={history} />);
    const iconButtons = wrapper.find(IconButton);
    let iconFacebook;
    let iconFacebookFound = false;
    iconButtons.forEach((iconButton) => {
      const props = iconButton.props();
      if (props.id === 'buttonFacebook') {
        iconFacebook = props;
        iconFacebookFound = true;
      }
    });
    expect(iconFacebookFound).toBe(true);
    const inst = wrapper.instance();
    expect(iconFacebook.onClick).toEqual(inst.onPressFacebook);
  });

  /**
  * Test button Google: press this button must call the function onPressGoogle
  */
  it('Test button Google: press this button must call the function onPressGoogle', () => {
    const wrapper = shallow(<WebHome intl={intlMockup} history={history} />);
    const iconButtons = wrapper.find(IconButton);
    let iconGoogle;
    let iconGoogleFound = false;
    iconButtons.forEach((iconButton) => {
      const props = iconButton.props();
      if (props.id === 'buttonGoogle') {
        iconGoogle = props;
        iconGoogleFound = true;
      }
    });
    expect(iconGoogleFound).toBe(true);
    const inst = wrapper.instance();
    expect(iconGoogle.onClick).toEqual(inst.onPressGoogle);
  });

  /**
  * Test button apple: press this button must call the function onPressApple
  */
  it('Test button apple: press this button must call the function onPressApple', () => {
    const wrapper = shallow(<WebHome intl={intlMockup} history={history} />);
    const iconButtons = wrapper.find(IconButton);
    let iconApple;
    let iconAppeFound = false;
    iconButtons.forEach((iconButton) => {
      const props = iconButton.props();
      if (props.id === 'buttonApple') {
        iconApple = props;
        iconAppeFound = true;
      }
    });
    expect(iconAppeFound).toBe(true);
    const inst = wrapper.instance();
    expect(iconApple.onClick).toEqual(inst.onPressApple);
  });
});
