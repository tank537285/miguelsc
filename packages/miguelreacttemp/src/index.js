import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/index.scss';
import reportWebVitals from './reportWebVitals';
import Router from "./router/Router";
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './redux/reducers/index';
// import {changeInfoDelay} from "./redux/actions";
// import { gsap } from "gsap";

const store=createStore(reducer,{"info":{"people":1}},compose(applyMiddleware(thunk)/*,reduxDevtools*/));
//接口初始化基础数据
// store.dispatch(changeInfoDelay());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router></Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
