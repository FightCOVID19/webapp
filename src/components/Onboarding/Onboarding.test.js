import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Onboarding from './Onboarding';

configure({ adapter: new Adapter() });

const title = 'test title 1';
const description = 'test description 1';
const image = null;
const pageNumber = '1';
const totalPages = 3;
function onPressStart() {}
function onPressNavigation() {}


describe('Test onbarding component', () => {
  it('Component is loaded and rendered', () => {
    shallow(
      <Onboarding
        title={title}
        description={description}
        image={image}
        pageNumber={pageNumber}
        totalPages={totalPages}
        onPressStart={onPressStart}
        onPressNavigation={onPressNavigation}
      />);
  });

  /**
  * Test that the title, description, image are shown
  */
  it('Test that the title, description, image are shown', () => {
    const wrapper = shallow(
      <Onboarding
        title={title}
        description={description}
        image={image}
        pageNumber={pageNumber}
        totalPages={totalPages}
        onPressStart={onPressStart}
        onPressNavigation={onPressNavigation}
      />);
    expect(wrapper.debug().search(title)).toBeGreaterThan(-1);
    expect(wrapper.debug().search(description)).toBeGreaterThan(-1);
    expect(wrapper.debug().search('<img')).toBeGreaterThan(-1);
  });


  /**
  * Test that when the props variable "error" is not empty, then it will shown
  */
  it('Test that when the props variable "error" is not empty, then it will shown', () => {
    const wrapper = shallow(
      <Onboarding
        error="test error"
      />);
    expect(wrapper.debug().search('test error')).toBeGreaterThan(-1);
  });
});
