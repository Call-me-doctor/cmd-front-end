import React, { Component, Fragment } from 'react';
import { ArrowBack } from '@material-ui/icons';
import Avatar from '../Avatar';

class BackNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _handleBack = () => {
    this.props.onCloseCallback();
  }

  render() {
    return (
      <Fragment>
        <div className="navbar nav-text back-navbar">
          <ArrowBack onClick={this._handleBack} /> <label>{this.props.label}</label>
        </div>
      </Fragment>
    );
  }
}

export default BackNavBar;