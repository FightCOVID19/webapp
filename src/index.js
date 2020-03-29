import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'typeface-roboto';


import './scss/index.scss';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './store';

import { IntlProvider } from 'react-intl';

import messages_en from './translations/en.json';
import messages_es from './translations/es.json';
import messages_de from './translations/de.json';

/* The default language is needed in case that the browser language is not defined
into the messages object */
const defaultLanguage = 'en';
const messages = {
  'en': messages_en,
  'es': messages_es,
  'de': messages_de,
};

let language = navigator.language.split(/[-_]/)[0];
if (messages[language] === undefined) {
  language = defaultLanguage;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <IntlProvider locale={language} messages={messages[language]}>
        <App />
      </IntlProvider>
    </Router>
  </Provider>,
  rootElement
);

serviceWorker.unregister();
