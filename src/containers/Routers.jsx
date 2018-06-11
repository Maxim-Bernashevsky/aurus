import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const mobyleDisplay = window.innerWidth < 400;

import Loadable from 'react-loadable';
// import AsyncComponent from "./AsyncComponent";
const LoadingComponent = () => (<h1>Loading...</h1>);

import {Footer, Header, Home, Senat, Configurator, Order} from "./AsyncComponent"


// const Header = AsyncComponent('../components/Header');
// const Footer = AsyncComponent('./../components/Footer');

// const Home = AsyncComponent('./Home');

// const Senat = Loadable({
//   loader: () => import(/* webpackChunkName: "senat" */ './Senat'),
//   loading: LoadingComponent,
// });
//


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

const Routers = () => mobyleDisplay ? <div>Mobile version in development...</div> : (
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