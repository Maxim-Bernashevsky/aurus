import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Loadable from 'react-loadable';
// import AsyncComponent from "../components/AsyncComponent";
const LoadingComponent = () => (<h1>Loading...</h1>);


// let Header = AsyncComponent('Header');
let Header = Loadable({
  loader: () => import(/* webpackChunkName: "header" */ '../components/Header'),
  loading: LoadingComponent,
});

let Footer = Loadable({
  loader: () => import(/* webpackChunkName: "footer" */ '../components/Footer'),
  loading: LoadingComponent,
});

let Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: LoadingComponent,
});

let Senat = Loadable({
  loader: () => import(/* webpackChunkName: "senat" */ './Senat'),
  loading: LoadingComponent,
});

let Configurator = Loadable({
  loader: () => import(/* webpackChunkName: "configurator" */ './Configurator'),
  loading: LoadingComponent,
});

let Order = Loadable({
  loader: () => import(/* webpackChunkName: "order" */ './Order'),
  loading: LoadingComponent,
});

const NODE_ENV_PROD = process.env.NODE_ENV === 'production';
const basename = NODE_ENV_PROD ? "/aurus" : '';

const RouteWithFooter = () => (
  <React.Fragment>
    <Switch>
      <Route path='/senat' component={Senat}/>
      <Route path='/configurator' component={Configurator}/>
      <Route path='/order' component={Order}/>
    </Switch>
    <Footer/>
  </React.Fragment>
);

const Routers = () => (
  <Router basename={basename}>
    <React.Fragment>
      <Header />

      <Switch>
        <Route exact path='/' component={Home}/>

        <RouteWithFooter />

        <Redirect to='/' />

      </Switch>

    </React.Fragment>
  </Router>
);

export default Routers