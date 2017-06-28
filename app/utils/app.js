import axios from 'axios'
import {CLIENT_ID, SECRET} from './APITokens'

const params = `?client_id=${CLIENT_ID}&client_secret=${SECRET}`

const getProfile = username => {
  return axios
    .get(`https://api.github.com/users/${username + params}`)
    .then(user => {
      // formatting the data before we pass it back
      return user.data
    })
}

const getRepos = username => {
  return axios.get(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
}

const getStarCount = repos => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (userProfile, repos) => {
  const followers = userProfile.followers
  const totalStars = getStarCount(repos)

  return followers * 3 + totalStars
}

const handleError = err => {
  console.warn(err)
  return null
}

const getUserData = player => {
  return axios.all([getProfile(player), getRepos(player)]).then(data => {
    const profile = data[0]
    const repos = data[1]
    return {
      profile: profile,
      score: calculateScore(profile, repos),
    }
  })
}
const sortPlayers = players => {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

module.exports = {
  battle: players => {
    return (
      axios
        // first map over each player and run getUserData fn
        .all(players.map(getUserData))
        // sort the array with the item in the first array being the winner
        .then(sortPlayers)
        // catch any errors
        .catch(handleError)
    )
  },

  fetchPopularRepos: language => {
    const encodedURI = window.encodeURI(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars$order=desc&type=Repositories`
    )

    return axios.get(encodedURI).then(responses => {
      return responses.data.items
    })
  },
}
