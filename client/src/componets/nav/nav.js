import React, { Component } from "react";
import "./nav.css";

class Navigation extends Component {
  render() {
    let linksMarkup = this.props.links.map((link, index) => {
      return (
        <li>
          <a href={link.link}>{link.label}</a>
        </li>
      );
    });

    return (
      <div className="nav">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          {linksMarkup}
        </ul>
      </div>
    );
  }
}

export default Navigation;
