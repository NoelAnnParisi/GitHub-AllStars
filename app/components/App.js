import React, {Component} from 'react'
import ReactRouter, {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Popular from './Popular'
import Nav from './Nav'
import Battle from './Battle'
import Results from '../screens/Results'
// Switch renders one specific route,
// if none of the routes are rendered you can render a 404

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => {
                return <p>Not Found</p>
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
