import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login'
import Admin from './pages/admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Admin} ></Route>
          <Route path='/login' component={Login} ></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
