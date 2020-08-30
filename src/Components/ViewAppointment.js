import React, { Component, Fragment } from 'react';
import BackNavBar from './NavigationBar/BackNavBar';
import Avatar from './Avatar';

class ViewAppointment extends Component {
  render() {
    return (
      <Fragment>
        <BackNavBar label="Appointment" />
        <div className="doctor-details">
          <Avatar className />
        </div>
      </Fragment>
    );
  }
}

export default ViewAppointment;