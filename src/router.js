import React from 'react';
import { Router, Route } from 'dva/router';

import Index from "./routes/Index.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>     
      <Route path="/" component={Index} />
    </Router>
  );
}

export default RouterConfig;
