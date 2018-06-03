import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from './containers/Home';
import Senat from './containers/Senat';
import Configurator from "./containers/Configurator";
import Order from "./containers/Order";

const DEV_MODE = true; // TODO from deploy
const basename = DEV_MODE ? '' : "/aurus";
const prefix = "";


const RouteWithFooter = () => (
  <React.Fragment>
    <Switch>
      <Route path={`${prefix}/senat`} component={Senat}/>
      <Route path={`${prefix}/configurator`} component={Configurator}/>
      <Route path={`${prefix}/order`} component={Order}/>
    </Switch>
    <Footer/>
  </React.Fragment>
);

const Routers = () => (
  <Router basename={basename}>
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path={`${prefix}/`} component={Home}/>

        <RouteWithFooter />

        <Redirect to={`${prefix}/`} />

      </Switch>

    </React.Fragment>
  </Router>
);

export default Routers