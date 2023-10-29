import React, { Component } from 'react';
import Search from '../from/FormSearch';
import './header.css';

class Header extends Component {
  render(): React.ReactNode {
    return (
      <div className="header">
        <img
          src="../../../public/pngwing.com (3).png"
          className="header__logo"
        ></img>
        <Search />
      </div>
    );
  }
}

export default Header;
