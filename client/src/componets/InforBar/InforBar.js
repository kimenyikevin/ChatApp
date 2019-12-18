  
import React from 'react';

import onlineIcon from '../Icon/onlineIcon.png';
import classes from './info.module.css';

const InfoBar = ({ room }) => (
  <div className={classes.infoBar}>
     <h3>{room}</h3>
      <img className={classes.onlineIcon} src={onlineIcon} alt="online icon" />
  </div>
);

export default InfoBar;