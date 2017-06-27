import React from 'react'

// changes the css of selected navbar item
const NavLink = require('react-router-dom').NavLink

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact={true} activeClassName="active" to="/">
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink exact={true} activeClassName="active" to="/battle">
          BATTLE
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} activeClassName="active" to="/popular">
          POPULAR
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
