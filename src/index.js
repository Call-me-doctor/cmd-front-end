import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import * as components from './component-imports';
import './index.scss';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={components.App} />
      <Route exact path="/about" component={components.About} />
      <Route exact path="/faqs" component={components.FAQs} />
      <Route exact path="/terms_and_conditions" component={components.TermsAndConditions} />
      <Route exact path="/login" component={components.Login} />
      <Route exact path="/register" component={components.Register} />
      <Route exact path="/register/complete" component={components.RegistrationDone} />
      <Route exact path="/register/:user_type" render={(props) => <components.Register {...props} />} />
      <Route exact path="/patient/completeprofile" component={components.PatientCompleteProfile} />
      <Route exact path="/patient/home" component={components.PatientHome} />
      <Route path="*" component={components.App} />
    </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
