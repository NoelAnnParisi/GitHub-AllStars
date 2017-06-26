import React, {Component} from 'react'

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
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className="languages">
        {languages.map(lang => {
          return (
            <li
              key={lang}
              style={
                lang === this.state.selectedLanguage ? {color: 'tomato'} : null
              }
              onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}
