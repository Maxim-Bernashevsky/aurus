import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './containers/Home';
import Senat from './containers/Senat';
import Configurator from "./containers/Configurator";
import Order from "./containers/Order";


const BasicExample = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home}/>
      <Route path="/senat" component={Senat}/>
      <Route path="/configurator" component={Configurator}/>
      <Route path="/order" component={Order}/>

      <Footer />
    </div>
  </Router>
);

export default BasicExample