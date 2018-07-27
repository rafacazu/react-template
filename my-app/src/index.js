import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import ItemDetails from './components/ItemDetails';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>
            <div>
            <Route path="/" component={App} />
            <Route path="details" component={ItemDetails} />
            </div>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
