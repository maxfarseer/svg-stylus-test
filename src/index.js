import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { routes } from './routes'

ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory} routes={routes} />
  </AppContainer>,
  document.getElementById('root')
)
