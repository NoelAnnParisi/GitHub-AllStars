import React, {Component} from 'react'
import SelectedLanguage from '../screens/SelectedLanguage'
import api from '../utils/app'

import RepoGrid from '../screens/RepoGrid'

export default class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  componentDidMount() {
    // fetch repos from Github's API
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null,
    })
    // when a user clicks on a language -> fetch most popular Repo's
    api.fetchPopularRepos(lang).then(repos => {
      // update UI w/repos
      this.setState({
        repos: repos,
      })
    })
  }

  render() {
    return (
      <div>
        <SelectedLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
        {!this.state.repos
          ? <p className="loading">LOADING</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}
