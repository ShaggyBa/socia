import postsData from "../data/profileData/Posts/PostsData"
import dialogsData from "../data/messagesData/DialogsData"
import messagesData from "../data/messagesData/MessagesData"
import users from "../data/profileData/UserData"
import friendsData from "../data/sidebarData/friends"
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";

export const store = {

    _state: {
        profilePage: //Страница профилей
            {
                users, //Данные о пользователях
                postsData, //Данные о постах
                values: {
                    postState: ""
                }
            },
        messages:
            {
                dialogsData, //Данные о диалогах
                messagesData, //Данные о сообщениях
                values: {
                    newMessageState: ""
                }
            },
        sidebar:
            {
                friendsData //Данные о друзьях
            },

    },


    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) { //Функция-наблюдатель
        this._callSubscriber = observer
    },

    dispatch(action) { //Все состояния меняются только через dispatch(action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messages = dialogReducer(this._state.messages, action)

        this._callSubscriber(this._state)
    }
}




