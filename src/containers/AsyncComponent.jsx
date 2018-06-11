import React  from 'react';
import Loadable from "react-loadable";

const LoadingComponent = () => (<h1>Loading...</h1>);

module.exports = {
  LoadingComponent: LoadingComponent,
  Header: Loadable({
    loader: () => import(/* webpackChunkName: "header" */ '../components/Header'),
    loading: LoadingComponent,
  }),
  Footer: Loadable({
    loader: () => import(/* webpackChunkName: "footer" */ '../components/Footer'),
    loading: LoadingComponent,
  }),
  Home: Loadable({
    loader: () => import(/* webpackChunkName: "home" */ './Home'),
    loading: LoadingComponent,
  }),
  Senat: Loadable({
    loader: () => import(/* webpackChunkName: "senat" */ './Senat'),
    loading: LoadingComponent,
  }),
  Configurator: Loadable({
    loader: () => import(/* webpackChunkName: "configurator" */ './Configurator'),
    loading: LoadingComponent,
  }),
  Order: Loadable({
    loader: () => import(/* webpackChunkName: "order" */ './Order'),
    loading: LoadingComponent,
  }),
};