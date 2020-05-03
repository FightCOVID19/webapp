import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextField } from '@material-ui/core';
import { ViewFieldsRegister} from './ViewFieldsRegister';

configure({ adapter: new Adapter() });
const intlMockup = {
  formatMessage: () => (''),
  formatDate: () => (''),
  formatTime: () => (''),
};

const history = {
  push: () => {},
};


describe('Test component LoginRegister - view fields register ', () => {
  /**
  * Component is loaded and rendered
  */
  it('Component is loaded and rendered', () => {
    shallow(<ViewFieldsRegister  history={history} intl={intlMockup} />);
  });

  /**
  * Test that the text fields email, password and confirm password are displayed
  */
  it('Test that the text fields email, password and confirm password are displayed', () => {
    const wrapper = shallow(<ViewFieldsRegister  history={history} intl={intlMockup} />);
    const textFields = wrapper.find(TextField);
    expect(textFields.length).toBe(3);
  });
});
