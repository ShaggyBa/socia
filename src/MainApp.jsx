import AppContainer from "./AppContainer"
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
export const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}><AppContainer /></Provider>
		</BrowserRouter>
	)
}