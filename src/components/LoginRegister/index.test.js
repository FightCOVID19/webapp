import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginRegister } from './index.js';
import { Button } from '@material-ui/core';
import ViewFieldsLogin from './ViewFieldsLogin';
import ViewFieldsRegister from './ViewFieldsRegister';

configure({ adapter: new Adapter() });
const intlMockup = {
  formatMessage: () => (''),
  formatDate: () => (''),
  formatTime: () => (''),
};

const history = {
  push: () => {},
};

describe('Test component LoginRegister', () => {
  it('Component is loaded and rendered', () => {
    shallow(<LoginRegister intl={intlMockup} history={history} />);
  });

  /**
  * Test that the components ViewFieldsLogin and ViewFieldsRegister are displayed
  */
  it('Test that the components ViewFieldsLogin and ViewFieldsRegister are displayed', () => {
    const wrapper = shallow(<LoginRegister intl={intlMockup} history={history} />);
    expect(wrapper.find(ViewFieldsLogin).length).toBe(1);
    expect(wrapper.find(ViewFieldsRegister).length).toBe(1);
  });

  /**
  * Test that by press the button login a function is called
  */
  it('Test that by press the button login a function is called', () => {
    const wrapper = shallow(<LoginRegister intl={intlMockup} history={history} />);
    const buttons = wrapper.find(Button);
    let buttonLoginFound = false;
    let buttonLoginProps;
    buttons.forEach((item) => {
      const props = item.props();
      if (props.id === 'buttonLogin') {
        buttonLoginFound = true;
        buttonLoginProps = props;
      }
    });
    expect(buttonLoginFound).toBe(true);
    const inst = wrapper.instance();
    expect(buttonLoginProps.onClick).toEqual(inst.onPressLogin);
  });

  /**
  * Test that by press the button register a function is called
  */
  it('Test that by press the button register a function is called', () => {
    const wrapper = shallow(<LoginRegister intl={intlMockup} history={history} />);
    const buttons = wrapper.find(Button);
    let buttonRegisterFound = false;
    let buttonRegisterProps;
    buttons.forEach((item) => {
      const props = item.props();
      if (props.id === 'buttonRegister') {
        buttonRegisterFound = true;
        buttonRegisterProps = props;
      }
    });
    expect(buttonRegisterFound).toBe(true);
    const inst = wrapper.instance();
    expect(buttonRegisterProps.onClick).toEqual(inst.onPressCreateAccount);
  });
});
