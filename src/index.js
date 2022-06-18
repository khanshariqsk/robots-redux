import React from "react";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import { createRoot } from "react-dom/client";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import robotsReducers from "./redux/reducers";

const store = createStore(robotsReducers,applyMiddleware(thunk,createLogger()));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
