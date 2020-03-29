import React from 'react';
import { onboardingData } from './OnboardingData';
import Onboarding from '../../components/Onboarding/Onboarding';

/**
* On boarding page
* @param object props
* @return object
*/
export const OnboardingPage = props => {
  const pageNumber = props.match.params.id;
  const onboardingPageData = onboardingData[pageNumber];
  const totalPages = Object.keys(onboardingData).length;
  if (!onboardingPageData) {
    return (
      <div>
        <Onboarding
          error="onboarding.error.pageNotExist"
        />
      </div>
    );
  }

  const {
    title,
    description,
    image,
    onStart
  } = onboardingPageData;

  /**
  * On press start
  */
  const onPressStart = () => {
    props.history.push(onStart);
  };

  /**
  * On press navigation
  * function used in the onboarding pages navigation
  * @param string page
  */
  const onPressNavigation = (page) => {
    props.history.push(`/onboarding/${page}`);
  };

  return (
    <div>
      <Onboarding
        title={title}
        description={description}
        image={image}
        pageNumber={pageNumber}
        totalPages={totalPages}
        onPressStart={onPressStart}
        onPressNavigation={onPressNavigation}
      />
    </div>
  );
};
