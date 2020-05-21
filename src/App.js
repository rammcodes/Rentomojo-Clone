import React from 'react'
import './App.scss'
import Homeview from './views/Homeview/Homeview'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Homeview} />
      </Switch>
    )
  }
}

export default App
