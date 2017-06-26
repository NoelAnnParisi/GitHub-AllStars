import React, {Component} from 'react'
import SelectedLanguage from './SelectedLanguage'

export default class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
    })
  }
  render() {
    return (
      <div>
        <SelectedLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
      </div>
    )
  }
}
