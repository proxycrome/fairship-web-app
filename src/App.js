import React, { Component } from "react";
import { Switch, BrowserRouter as Router, HashRouter } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";
import AppRoutePublic from "./routes/routePublic";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";
import Loader from "./components/Common/Loading";

// Import scss
import "./theme.scss";

import { loadUser, fetchProfile } from "./store/auth/actions";

import {
  getAllServiceReqComplete,
  getAllServiceReqPending
} from "./store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadUser();
    this.props.fetchProfile();
    this.props.getAllServiceReqComplete();
    this.props.getAllServiceReqPending();
  }

  render() {
    const Layout = VerticalLayout;
    return (
      <React.Fragment>
        {this.props.auth.isAuthenticated !== null ? (
          <Router>
            <Switch>
              {publicRoutes.map((route, idx) => (
                <AppRoutePublic
                  path={route.path}
                  layout={NonAuthLayout}
                  component={route.component}
                  isAuthenticated={this.props.auth.isAuthenticated}
                  key={idx}
                />
              ))}

              {authProtectedRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={Layout}
                  component={route.component}
                  isAuthenticated={this.props.auth.isAuthenticated}
                  key={idx}
                />
              ))}
            </Switch>
          </Router>
        ) : (
          <div className="vh-100">
            <Loader />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
    auth: state.Account,
  };
};

export default connect(mapStateToProps, {
  loadUser,
  fetchProfile,
  getAllServiceReqComplete,
  getAllServiceReqPending
})(App);
