import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewHowToHelp, { howToHelp } from './ViewHowToHelp';

configure({ adapter: new Adapter() });
const history = {
  push: () => {},
};

describe('Test webHome page - view how to help', () => {
  /**
  * Component is loaded and rendered
  */
  it('Component is loaded and rendered', () => {
    shallow(<ViewHowToHelp  history={history} />);
  });

  /**
  * Test that all items defined into the array howToHelp are shown
  */
  it('Test that all items defined into the array howToHelp are shown', () => {
    const wrapper = shallow(<ViewHowToHelp  history={history} />);
    howToHelp.forEach((item) => {
      expect(wrapper.debug().search(item.title)).toBeGreaterThan(-1);
      expect(wrapper.debug().search(item.description)).toBeGreaterThan(-1);
    });
  });
});
