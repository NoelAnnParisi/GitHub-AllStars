import React, {Component} from 'react'
import {Link} from 'react-router'

import queryString from 'query-string'

import api from '../utils/app'
import Loading from '../components/Loading'
import Player from '../components/Player'
import PlayerPreview from './PlayerPreview'
import Profile from './Profile'

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search)
    api.battle([players.playerOneName, players.playerTwoName]).then(results => {
      if (results === null) {
        this.setState({
          error:
            'Looks like there was an error, check that both users exists on GitHub',
          loading: false,
        })
      }
      this.setState({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false,
      })
    })
  }

  render() {
    const winner = this.state.winner
    const loser = this.state.loser
    const error = this.state.error
    const loading = this.state.loading
    if (loading) {
      return <Loading text="Calculating a winner" />
    }
    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      )
    }
    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    )
  }
}

export default Results
