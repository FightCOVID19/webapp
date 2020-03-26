import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import UploadPicture from './pages/upload-photo/UploadPicture';
import PreviewPicture from './pages/upload-photo/PreviewPicture';

Amplify.configure(awsconfig);

let theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: '#5e17eb',
      main: '#310092',
      dark: '#1c0054'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/signUp' render={() => <SignUp />} />
        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/forgot' render={() => <ForgotPassword />} />


        <Route exact path='/upload' render={() => <UploadPicture />} />
        <Route exact path='/upload/preview' render={() => <PreviewPicture />} />
      </main>
    </ThemeProvider>
  );
}

export default App;

// export default withAuthenticator(App, true);
