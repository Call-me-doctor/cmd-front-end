import React, { Component } from 'react';
import { Cancel, Save, Navigation } from '@material-ui/icons';
import Divider from '../Divider';
import './CustomInputs.scss';

class ActionButtons extends Component {
  render() {
    return (
      <div className="action-buttons navbar nav-text">
        <Cancel />
        <Divider vertical color="#FFFC00" />
        <Save />
        <Divider vertical color="#FFFC00" />
        <Navigation />
      </div>
    );
  }
}

export default ActionButtons;