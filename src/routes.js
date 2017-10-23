import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Portfolio from './components/Portfolio';
import Admin from './components/Admin';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Portfolio} />
    <Route path="/admin" component={Admin} />
  </Route>
);
