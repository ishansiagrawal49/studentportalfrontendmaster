import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/store';

// Importing bootstrap
import bootstrap from 'bootstrap'; // eslint-disable-line
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Custom Stylesheets
import './styles/scss/common.scss';

const Main = withRouter((props) => <App {...props} />);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Register and unregister service worker
serviceWorker.unregister();
