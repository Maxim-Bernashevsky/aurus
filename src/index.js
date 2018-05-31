import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
