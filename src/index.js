import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import Hello from './components/Hello';
// import CardList from './components/CardList';

import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <h1>Holaaaaa</h1>
  // <Hello saludos={'Saludos desde el index.js goe'}/>
  <App/>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
