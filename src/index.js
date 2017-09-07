import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (root)
  import("./App").then(({ default: App }) => ReactDOM.render(<App />, root));
registerServiceWorker();
