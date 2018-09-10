import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './index.css';


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={App}></Route>
        </div>
      </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
