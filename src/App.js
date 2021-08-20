import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home.js";
import Form from "./Form/PizzaForm";

const App = () => {
  return (
    <div className='container'>
    <Nav />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </Switch>
  </div>
);
};
export default App;