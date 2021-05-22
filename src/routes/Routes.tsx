import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
