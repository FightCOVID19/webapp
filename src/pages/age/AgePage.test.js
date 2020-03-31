import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AgePage from './AgePage';
import Question from '../../components/Age/Question';
import UnderAge from '../../components/Age/UnderAge';

configure({ adapter: new Adapter() });

const history = {
  push: () => {},
};

describe('Test age page', () => {
  it('Component is loaded and rendered', () => {
    shallow(<AgePage history={history} />);
  });

  /**
  * Test that the component Question is shown
  */
  it('Test that the component Question is shown', () => {
    const wrapper = shallow(<AgePage history={history} />);
    expect(wrapper.find(Question).length).toBe(1);
  });

  /**
  * Test that after push the button no the component UnderAge is shown
  */
  it('Test that after push the button no the component UnderAge is shown', () => {
    const wrapper = shallow(<AgePage history={history} />);
    expect(wrapper.find(Question).length).toBe(1);
    const props = wrapper.props();
    props.onPressNo();
    wrapper.update();
    expect(wrapper.find(UnderAge).length).toBe(1);
  });
});
