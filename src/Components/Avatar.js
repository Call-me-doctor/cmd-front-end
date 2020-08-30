import React, { Component } from 'react';

class Avatar extends Component {
  render() {
    return (
      <div className="logo">
        <a href="/"><img src={process.env.PUBLIC_URL + "/images/profile.png"} alt="logo" /></a>
      </div>
    );
  }
}

export default Avatar;