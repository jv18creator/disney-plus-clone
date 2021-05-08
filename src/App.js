import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Details";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
{/*
         <Link to='/details'>Details</Link> 
*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
