import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
// import { pathname, history } from "./common/history";

var pathname = window.location.pathname;




import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './containers/Home';
import Senat from './containers/Senat';
import Configurator from "./containers/Configurator";
import Order from "./containers/Order";


const RouteWhithFooter = () => (
  <React.Fragment>
    <Switch>
      <Route path="/senat" component={Senat}/>
      <Route path="/configurator" component={Configurator}/>
      <Route path="/order" component={Order}/>
    </Switch>
    <Footer/>
  </React.Fragment>
);

const Routers = () => (
  <Router>
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path="/" component={Home}/>

        <RouteWhithFooter />

        <Redirect to="/" />

      </Switch>

    </React.Fragment>
  </Router>
);

export default Routers