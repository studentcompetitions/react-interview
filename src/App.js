import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./dux/store";
import { Router } from "./Router";
import "./css/tailwind.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
