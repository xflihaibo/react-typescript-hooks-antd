import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RouterPage from './router/index';
import {hot} from 'react-hot-loader';
const App = hot(module)(RouterPage);

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('app')
);
