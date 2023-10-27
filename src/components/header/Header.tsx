import React, { Component } from 'react';
import Search from '../from/FormSearch';
import './header.css';

class Header extends Component {
  render(): React.ReactNode {
    return (
      <div className="header">
        {/* <img src="../../../public/react.svg"></img> */}
        <img src="../../../public/pngwing.com (3).png"></img>
        <Search />
      </div>
    );
  }
}

export default Header;

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
