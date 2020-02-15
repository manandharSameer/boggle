import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {Reducers} from "./store/reducers";
import {Store} from "./store/store";

const store = Store.createAppStore();
const app = (
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <div>
          <App />
        </div>
      </BrowserRouter>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      app,
      document.body.appendChild(document.createElement('div')),
  )
});
