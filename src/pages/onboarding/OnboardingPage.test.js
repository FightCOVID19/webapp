import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OnboardingPage } from './OnboardingPage';
import { onboardingData } from './OnboardingData';

configure({ adapter: new Adapter() });

const match = {
  params: {
    id: '1',
  },
};

const history = {
  push: () => {},
};


describe('Test onbarding page', () => {
  it('Component is loaded and rendered', () => {
    shallow(<OnboardingPage match={match} history={history} />);
  });

  /**
  * Test the onboarding page 2 is loaded
  */
  it('Test the onboarding page 2 is loaded', () => {
    const matchTest = {
      params: {
        id: '2',
      },
    };
    const wrapper = shallow(<OnboardingPage match={matchTest} history={history} />);
    expect(wrapper.props().title).toBe(onboardingData[2].title);
    expect(wrapper.props().description).toBe(onboardingData[2].description);
    expect(wrapper.props().image).toBe(onboardingData[2].image);
  });

  /**
  * Test that for a non-existent page an error is shown
  */
  it('Test that for a non-existent page an error is shown', () => {
    const matchTest = {
      params: {
        id: '5',
      },
    };
    const wrapper = shallow(<OnboardingPage match={matchTest} history={history} />);
    expect(wrapper.props().error).not.toBe('');
  });

  /**
  * Test that the funcion onPressNavigation call the props function history.push
  */
  it('Test that the funcion onPressNavigation call the props function history.push', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const matchTest = {
      params: {
        id: '2',
      },
    };
    const wrapper = shallow(<OnboardingPage match={matchTest} history={historyTest} />);
    const props = wrapper.props();
    props.onPressStart();
  });

  /**
  * Test that the funcion onPressNavigation call the props function history.push
  */
  it('Test that the funcion onPressNavigation call the props function history.push', (done) => {
    const historyTest = {
      push: () => { done(); },
    };
    const matchTest = {
      params: {
        id: '2',
      },
    };
    const wrapper = shallow(<OnboardingPage match={matchTest} history={historyTest} />);
    const props = wrapper.props();
    props.onPressNavigation();
  });
});
