import React, { Component } from 'react';
import Loadable from "react-loadable";
const LoadingComponent = () => (<h1>Loading...</h1>);

export default (pathComponent) => Loadable({
  loader: () => import(pathComponent),
  loading: LoadingComponent,
});
