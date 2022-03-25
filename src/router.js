import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TodoPage from './routes/TodoPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
