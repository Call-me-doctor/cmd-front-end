import React, { Component, Fragment } from 'react';
import BackNavBar from '../NavigationBar/BackNavBar';
import Avatar from '../Avatar';
import './ViewAppointment.scss';

class ViewAppointment extends Component {
  render() {
    return (
      <Fragment>
        <BackNavBar label="Appointment" />
        <div className="doctor-details">
          <Avatar className="avatar" />
          <div className="details">
            <label className="title">Dr. Name Surname</label>
            <label className="sub-title">Hospital name</label>
            <label className="sub-title">Date: 12/05/2020</label>
            <label className="sub-title">Status</label>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ViewAppointment;