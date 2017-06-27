import React from 'react'

// changes the css of selected navbar item
import {NavLink} from 'react-router-dom'

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
