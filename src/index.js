import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import * as components from './component-imports';

const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={components.App} />
        <Route exact path="/about" component={components.About} />
        <Route path="*" component={components.App} />
      </Switch>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
