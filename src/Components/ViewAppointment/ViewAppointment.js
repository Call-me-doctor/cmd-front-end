import React, { Component, Fragment } from 'react';
import Avatar from '../Avatar';
import BackNavBar from '../NavigationBar/BackNavBar';
import Divider from '../Divider';
import { LOREM } from '../../constants';
import { Map, TileLayer, Marker } from 'react-leaflet';
import './ViewAppointment.scss';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
let DefaultIcon = L.icon({
  ...L.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

class ViewAppointment extends Component {
  constructor() {
    super();

    this.state = {
      lat: -26.191518,
      lng: 28.027568,
      zoom: 100,
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
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
        <Divider />
        <div className="view-appointment-details">
          <div className="detail">
            <label className="body-title">Affected Body Parts</label>
            <div className="description">Head, nose</div>
          </div>
          <div className="detail">
            <label className="body-title">Description</label>
            <div className="description">{LOREM}</div>
          </div>
          <div className="detail">
            <label className="body-title">Hospital Location</label>
            <div className="description">
              <Map center={position} zoom={this.state.zoom} style={{ width: '100wh', height: '300px' }}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
              </Map>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ViewAppointment;