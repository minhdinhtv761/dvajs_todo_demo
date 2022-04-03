import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TodoPage from './routes/todo/TodoPage';
import DogPage from './routes/dog/DogPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={TodoPage} /> */}
        <Route path="/" exact component={DogPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
