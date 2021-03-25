import React from 'react';
import { Switch, Route } from "react-router-dom";

import ProductsList from "../ProductsList/ProductsList";
import Cart from "../Cart/Cart";
import Success from "../Success/Success";

import './App.css';

function App() {
  return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={ProductsList} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/success" exact component={Success} />
            </Switch>
        </div>
  );
}

export default App;
