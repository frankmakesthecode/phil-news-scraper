import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import AllNews from './components/AllNews';
import Rappler from './components/Rappler';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div id="main">
        <h3 className="main-header">Philippine News Aggregator</h3>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/news" component={AllNews} />
          <Route path="/rappler" component={Rappler} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null)(Routes));
