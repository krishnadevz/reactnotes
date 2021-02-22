**Basics of redux**
* import {createStore} from 'redux';
* //Store globalized state
* //Action increment //going to store and saying i am hungry that is the action out ther
* //reducer
* //dispatch

``` js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from 'redux';

//Store globalized state
//Action increment //going to store and saying i am hungry that is the action out ther
const increment = () => {
  return {
    type: "INCREMENT",
    //instead of name some folks use type there
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
    //instead of name some folks use type there
  };
};
//reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state -1;
  }
};
let store = createStore(counter);
//display it in console
store.subscribe(()=> console.log(store.getState()));
//dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
