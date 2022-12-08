import './App.css';
import Header from './components/Header'
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<div className="app-wrapper">
			<div className="container">
				<Header />
				<Sidebar />
				<Profile />
			</div>
		</div>
	);
}

export default App;
