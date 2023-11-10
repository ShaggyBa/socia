import React from 'react';
import { initializeApp } from './redux/appReducer';
import App from './App';
import { WithRouter } from './components/WithRouter/WithRouter';

import { compose } from 'redux';
import { connect } from 'react-redux';

// class AppContainer extends React.Component {

// 	componentDidMount() {
// 		debugger
// 		this.props.initializeApp()
// 	}

// 	render() {
// 		return <App {...this.props} />
// 	}
// }

const AppContainer = (props) => {
	React.useEffect(() => {
		props.initializeApp()
	}, [])

	return (
		<App {...props} />
	)
}

export default compose
	(
		WithRouter,
		connect(
			(state) => ({
				initialize: state.app.initialize
			}),
			{
				initializeApp
			})
	)
	(AppContainer);


