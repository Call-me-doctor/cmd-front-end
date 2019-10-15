import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './Components/App/App';

const routing = (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={App} />
      </Switch>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
