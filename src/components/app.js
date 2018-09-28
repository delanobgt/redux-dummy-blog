import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostIndex from '../containers/PostIndex'
import PostNew from '../containers/PostNew'
import PostDetail from '../containers/PostDetail'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/new' component={PostNew} />
          <Route path='/:post_id' component={PostDetail} />
          <Route path='/' component={PostIndex} />
        </Switch>
      </BrowserRouter>
    )
  }
}
