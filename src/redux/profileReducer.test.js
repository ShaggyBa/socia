import postsData from '../data/profileData/Posts/PostsData';
import profileReducer from './profileReducer';

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"


/*it("something", () => {
	//1 test data
	const action = { type: ADD_POST, value: "new post" }
	const initialState = {
		defaultUser: [],
		profile: null,
		status: "",
		postsData: postsData,
		values: {
			postState: ""
		}
	}
	//2 action
	// console.log(initialState.postsData.length) // 7
	const newState = profileReducer(initialState, action)
	//3 expectation
	// expect(newState.postsData.length).toBe(8) // 8
})*/


// describe('profileReducer', () => {
// 	it('should handle ADD_POST', () => {
// 		const initialState = {
// 			defaultUser: [],
// 			profile: null,
// 			status: "",
// 			postsData: [],
// 			values: {
// 				postState: ""
// 			}
// 		};
// 		const postText = 'New post';
// 		const action = {
// 			type: ADD_POST,
// 			value: postText
// 		};

// 		const newState = profileReducer(initialState, action);

// 		expect(newState.postsData.length).toBe(1);
// 		expect(newState.postsData[0].post__text).toBe(postText);
// 	});

// 	it('should handle UPDATE_NEW_POST_TEXT', () => {
// 		const initialState = {
// 			defaultUser: [],
// 			profile: null,
// 			status: "",
// 			postsData: [],
// 			values: {
// 				postState: ""
// 			}
// 		};
// 		const postText = 'New post';
// 		const action = {
// 			type: UPDATE_NEW_POST_TEXT,
// 			value: postText
// 		};

// 		const newState = profileReducer(initialState, action);

// 		expect(newState.values.postState).toBe(postText);
// 	});

// 	it('should handle SET_USER_PROFILE', () => {
// 		const initialState = {
// 			defaultUser: [],
// 			profile: null,
// 			status: "",
// 			postsData: [],
// 			values: {
// 				postState: ""
// 			}
// 		};
// 		const profile = {
// 			name: 'John Doe',
// 			email: 'john@example.com'
// 		};
// 		const action = {
// 			type: SET_USER_PROFILE,
// 			profile
// 		};

// 		const newState = profileReducer(initialState, action);

// 		expect(newState.profile).toBe(profile);
// 	});

// 	it('should handle SET_USER_STATUS', () => {
// 		const initialState = {
// 			defaultUser: [],
// 			profile: null,
// 			status: "",
// 			postsData: [],
// 			values: {
// 				postState: ""
// 			}
// 		};
// 		const status = 'Online';
// 		const action = {
// 			type: SET_USER_STATUS,
// 			status
// 		};

// 		const newState = profileReducer(initialState, action);

// 		expect(newState.status).toBe(status);
// 	});

// 	it('should return the initial state', () => {
// 		const initialState = {
// 			defaultUser: [],
// 			profile: null,
// 			status: "",
// 			postsData: [],
// 			values: {
// 				postState: ""
// 			}
// 		};
// 		const action = {
// 			type: 'UNKNOWN_ACTION'
// 		};

// 		const newState = profileReducer(initialState, action);

// 		expect(newState).toEqual(initialState);
// 	});
// });