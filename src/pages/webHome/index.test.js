import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

describe('Test webHome page', () => {
  /**
  * Component is loaded and rendered
  */
  it('Component is loaded and rendered', () => {
    shallow(<WebHome intl={intlMockup} history={history} />);
  });
});
