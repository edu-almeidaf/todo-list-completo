import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>To-Do List Com Props</h1>
        <Link to="/com-redux">Ir para o todo-list com Redux</Link>
      </header>
    );
  }
}

export default Header;
