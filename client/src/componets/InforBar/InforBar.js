  
import React from 'react';

import onlineIcon from '../Icon/onlineIcon.png';
import './info.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
     <h3>{room}</h3>
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
  </div>
);

export default InfoBar;