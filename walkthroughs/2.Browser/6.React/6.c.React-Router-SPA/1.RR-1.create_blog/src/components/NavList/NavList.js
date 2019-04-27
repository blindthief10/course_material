import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavList extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create">Create A Post</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/show">Show Current Posts</NavLink>
        </li>
      </ul>
    )
  }
}
