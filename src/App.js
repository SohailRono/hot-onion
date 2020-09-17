import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/product/:category" component={Product}></Route>
          <Route path="/">
           
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
