import React from 'react'

// changes the css of selected navbar item
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact={true} activeClassName="active" to="/">
          <p className="emojis">🏠</p>
        </NavLink>
      </li>

      <li>
        <NavLink exact={true} activeClassName="active" to="/battle">
          <p className="emojis">⚔</p>
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} activeClassName="active" to="/popular">
          <p className="emojis">💁</p>
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
