import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';

const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/home" component={Home}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;