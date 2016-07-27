import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import Splash from './components/Splash'
import Auth from './components/Auth'

export default (
  <Route path="/" component={Layout}>
  <IndexRoute component={Splash} />
  <Route path="auth" component={Auth} />
  <Redirect from="*" to="/" />
  </Route>
)
