import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-roboto'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Raleway:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
