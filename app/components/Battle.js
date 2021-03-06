import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import PlayerInput from '../screens/PlayerInput'
import PlayerPreview from '../screens/PlayerPreview'

export default class Battle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleSubmit(id, userName) {
    this.setState(() => {
      const newState = {}
      newState[id + 'Name'] = userName
      newState[id + 'Image'] = `https://github.com/${userName}.png?size=200`
      return newState
    })
  }
  handleReset(id) {
    this.setState(() => {
      const newState = {}
      newState[id + 'Name'] = ''
      newState[id + 'Image'] = null
      return newState
    })
  }
  render() {
    const match = this.props.match
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    const playerOneImage = this.state.playerOneImage
    const playerTwoImage = this.state.playerTwoImage
    return (
      <div>
        <div className="row">
          {!playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage != null &&
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button
                className="reset"
                onClick={this.handleReset.bind(null, 'playerOne')}>
                Reset
              </button>
            </PlayerPreview>}
          {!playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />}
          {playerTwoImage != null &&
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button
                className="reset"
                onClick={this.handleReset.bind(null, 'playerTwo')}>
                Reset
              </button>
            </PlayerPreview>}
        </div>
        {playerOneImage &&
          playerTwoImage &&
          <Link
            className="button"
            to={{
              pathname: match.url + '/results',
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
            }}>
            {' '}Battle{' '}
          </Link>}
      </div>
    )
  }
}
