import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import UploadPicture from './pages/upload-photo/UploadPicture';
import PreviewPicture from './pages/upload-photo/PreviewPicture';
import { PatientQuizPage } from './pages/patient-quiz/PatientQuiz.page';
import { paisanosTheme } from './theme/paisanos.theme';
import { OnboardingPage } from './pages/onboarding/OnboardingPage';
import AgePage from './pages/age/AgePage';
import HomePage from './pages/home/HomePage';
import HowDoYouFeel from './pages/howDoYouFeel/HowDoYouFeel';


//Amplify.configure(awsconfig);


function App() {
  return (
    <ThemeProvider theme={paisanosTheme}>
      <main>
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/signUp' render={() => <SignUp />} />
        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/forgot' render={() => <ForgotPassword />} />
        <Route exact path='/patient-quiz/:id' render={(props) => <PatientQuizPage {...props} />} />
        <Route exact path='/onboarding/:id' render={(props) => <OnboardingPage {...props} />} />
        <Route exact path='/age' render={(props) => <AgePage {...props} />} />
        <Route exact path='/homeNew' render={(props) => <HomePage {...props} />} />
        <Route exact path='/howDoYouFeel' render={(props) => <HowDoYouFeel {...props} />} />
        <Route exact path='/upload' render={() => <UploadPicture />} />
        <Route exact path='/upload/preview' render={() => <PreviewPicture />} />
      </main>
    </ThemeProvider>
  );
}

export default App;

// export default withAuthenticator(App, true);
