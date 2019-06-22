import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import ReduxToastr from "react-redux-toastr";
import './index.css';
import "../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css";
import App from './App/index';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './Common/util/ScrollToTop';
import rootReducer from './Store/Reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk, logger))
)

ReactDOM.render(
<Provider store={store}>
  <div>
      <BrowserRouter>
        <ScrollToTop>
            <ReduxToastr 
             position = "bottom-right"
             transitionIn = "fadeIn"
             transitionOut = "fadeOut"
            />
            <App />
        </ScrollToTop>
      </BrowserRouter>
  </div>
</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
