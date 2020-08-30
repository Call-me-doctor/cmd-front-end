import React, { Component } from 'react';

class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = process.env.PUBLIC_URL + "/images/profile.png";
    return (
      <div className="avatar">
        <div style={{ backgroundImage: `url(${url})` }} />
      </div>
    );
  }
}

export default Avatar;