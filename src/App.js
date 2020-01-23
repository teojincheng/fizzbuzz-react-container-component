import React from "react";
import Counter from "./components/Counter";
import Filter from "./components/Filter";
import TestingAxios from "./components/TestingAxios";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/counter">Counter</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/testaxios">Testing Axios</Link>
      </header>

      <div>
        <Route path="/counter" component={Counter} />
        <Route path="/filter" component={Filter} />
        <Route path="/testaxios" component={TestingAxios} />
      </div>
    </BrowserRouter>
  );
}

export default App;
