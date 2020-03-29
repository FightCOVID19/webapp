import onboardingImage1 from '../../assets//PNG/BROKEN ARM.png';
import onboardingImage2 from '../../assets//PNG/ASK A DOCTOR.png';
import onboardingImage3 from '../../assets//PNG/SHIFT ROTATION.png';

/**
 * @return Record< pageNumber:string, OnboardingPage >
 *
 * ``` ts
 * interface Onboarding {
 *  // id to the translation onboarding title
 *  title: string
 *  // id to the translation onboarding description
 *  description: string
 *  // Path to the image to display
 *  image: string
 *  // page to display when the button onStart is pushed
 *  onStart: string
 * }
 * ```
 */
export const onboardingData = {
  '1': {
    title: 'onboarding.title.1',
    description: 'onboarding.description.1',
    image: onboardingImage1,
    onStart: '/patient-quiz/1'
  },
  '2': {
    title: 'onboarding.title.2',
    description: 'onboarding.description.2',
    image: onboardingImage2,
    onStart: '/patient-quiz/1'
  },
  '3': {
    title: 'onboarding.title.3',
    description: 'onboarding.description.3',
    image: onboardingImage3,
    onStart: '/patient-quiz/1'
  },
};
