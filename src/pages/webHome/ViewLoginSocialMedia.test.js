import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IconButton } from '@material-ui/core';
import ViewLoginSocialMedia from './ViewLoginSocialMedia';

configure({ adapter: new Adapter() });
const history = {
  push: () => {},
};

describe('Test webHome page - view login social media', () => {
  /**
  * Component is loaded and rendered
  */
  it('Component is loaded and rendered', () => {
    shallow(<ViewLoginSocialMedia  history={history} />);
  });

  /**
  * Test that the button Facebook exists and by press it a function must be called
  */
  it('Test that the button Facebook exists and by press it a function must be called', () => {
    const wrapper = shallow(<ViewLoginSocialMedia history={history} />);
    const iconButtons = wrapper.find(IconButton);
    let iconFacebookProps;
    let iconFacebookFound = false;
    iconButtons.forEach((iconButton) => {
      const props = iconButton.props();
      if (props.id === 'buttonFacebook') {
        iconFacebookProps = props;
        iconFacebookFound = true;
      }
    });
    expect(iconFacebookFound).toBe(true);
    expect(typeof iconFacebookProps.onClick).toBe('function');
  });

  /**
  * Test that the button google exists and by press it a function must be called
  */
  it('Test that the button google exists and by press it a function must be called', () => {
    const wrapper = shallow(<ViewLoginSocialMedia history={history} />);
    const iconButtons = wrapper.find(IconButton);
    let iconGoogleProps;
    let iconGoogleFound = false;
    iconButtons.forEach((iconButton) => {
      const props = iconButton.props();
      if (props.id === 'buttonGoogle') {
        iconGoogleProps = props;
        iconGoogleFound = true;
      }
    });
    expect(iconGoogleFound).toBe(true);
    expect(typeof iconGoogleProps.onClick).toBe('function');
  });

  /**
  * Test that the button apple exists and by press it a function must be called
  */
  it('Test that the button apple exists and by press it a function must be called', () => {
    const wrapper = shallow(<ViewLoginSocialMedia history={history} />);
    const iconButtons = wrapper.find(IconButton);
    let iconAppleProps;
    let iconAppeFound = false;
    iconButtons.forEach((iconButton) => {
      const props = iconButton.props();
      if (props.id === 'buttonApple') {
        iconAppleProps = props;
        iconAppeFound = true;
      }
    });
    expect(iconAppeFound).toBe(true);
    expect(typeof iconAppleProps.onClick).toBe('function');
  });
});
