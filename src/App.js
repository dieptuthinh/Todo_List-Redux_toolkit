import React from 'react';
import {   Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import Home from './components/views/Home'
import Todo from "./components/views/Todo";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        {/* <Redirect exact from="/" to="/" /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
