import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class PlayerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    const value = evt.target.value
    this.setState({
      username: value,
    })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.onSubmit(this.props.id, this.state.username)
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          placeholder="Github username"
          autoComplete="off"
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}>
          {' '}Submit{' '}
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
