const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            const newPost = { //Создание нового поста
                id: state.postsData.length + 1,
                post__authorName: "ShaggyBa",
                post__authorImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
                post__text: state.values.postState,
                post__likes: 0,
                post__images: ""
            }
            state.postsData.unshift(newPost) //Добавление нового поста в начало списка постов
            state.values.postState = "" //Обнуление состояния текстового поля
            return state
        case UPDATE_NEW_POST_TEXT:
            state.values.postState = action.value
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () =>
    ({
        type: ADD_POST
    })

export const updateNewPostTextActionCreator = (value) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        value: value
    })
export default profileReducer