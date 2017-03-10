import React from 'react'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import App from '../components/container/App'
import EstateDataPage from '../components/page/EstateDataPage'

class MainRouter extends React.Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path="/data" component={ EstateDataPage } />
        <Redirect from="/" to="/data"  />
        <Route path="/" component={ App }  />
      </Router>
    )
  }
}

export default MainRouter;
