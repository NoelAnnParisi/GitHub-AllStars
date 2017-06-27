import React, {Component} from 'react'

const Link = require('react-router-dom').Link

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Battle your friends... and stuff</h1>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    )
  }
}
