import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import './Menu.css';
class CustomMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right width={ 180 } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }  >
        <a id="home" className="menu-item body" href="/">Home</a>
        <a id="about" className="menu-item body" href="/about">About</a>
      </Menu>
    );
  }
}

export default CustomMenu;