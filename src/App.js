import React, { Component } from "react";
import { Switch, BrowserRouter as Router, HashRouter} from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./theme.scss";

import { loadUser } from './store/auth/actions';
// import { auth } from "firebase";

//Fake backend
// import fakeBackend from './helpers/AuthType/fakeBackend';

//Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Activating fake backend
// fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };
  
// init firebase backend
// initFirebaseBackend(firebaseConfig);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
		// this.getLayout = this.getLayout.bind(this);
	}

	componentDidMount() {
    // this.props.loadUser();
  }

	render() {
		// const Layout = this.getLayout();
		const Layout = VerticalLayout;
		return (
			<React.Fragment>
				<HashRouter>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={NonAuthLayout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={Layout}
								component={route.component}
								key={idx}
								isAuthProtected={true}
							/>
						))}
					</Switch>
				</HashRouter>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout,
		auth: state.Account
	};
};


export default connect(mapStateToProps, {loadUser})(App);
