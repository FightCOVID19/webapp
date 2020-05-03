import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button, TextField } from '@material-ui/core';
import { ViewFieldsLogin } from './ViewFieldsLogin';

configure({ adapter: new Adapter() });
const intlMockup = {
  formatMessage: () => (''),
  formatDate: () => (''),
  formatTime: () => (''),
};

const history = {
  push: () => {},
};


describe('Test component LoginRegister - view fields login ', () => {
  /**
  * Component is loaded and rendered
  */
  it('Component is loaded and rendered', () => {
    shallow(<ViewFieldsLogin  history={history} intl={intlMockup} />);
  });

  /**
  * Test that the text fields email and password are displayed
  */
  it('Test that the text fields email and password are displayed', () => {
    const wrapper = shallow(<ViewFieldsLogin  history={history} intl={intlMockup} />);
    const textFields = wrapper.find(TextField);
    expect(textFields.length).toBe(2);
  });

  /**
  * Test press the button buttonForgotPassword a function is called
  */
  it('Test press the button buttonForgotPassword a function is called', () => {
    const wrapper = shallow(<ViewFieldsLogin  history={history} intl={intlMockup} />);
    const button = wrapper.find(Button);
    expect(button.length).toBe(1);
    expect(typeof button.props().onClick).toBe('function');
  });
});
