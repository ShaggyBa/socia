import { appReducer } from "./appReducer";

const SET_INITIALIZE = "SET_INITIALIZE";

it("should initialize app", () => {
	const initialState = {
		initialize: false
	};

	const newState = appReducer(initialState, {
		type: SET_INITIALIZE
	});

	expect(newState.initialize).toBe(true);
})