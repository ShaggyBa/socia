import { useParams } from "react-router-dom";

export function WithRouter(Component) {
	function ComponentWithRouterProp(props) {
		// let location = useLocation();
		// let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}