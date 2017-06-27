import React, {Component} from 'react'
import PropTypes from 'prop-types'

const SelectedLanguage = props => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            key={lang}
            style={
              lang === props.selectedLanguage ? {color: 'palevioletred'} : null
            }
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default SelectedLanguage
