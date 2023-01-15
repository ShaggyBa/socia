import postsData from "./data/profileData/Posts/PostsData"
import dialogsData from "./data/messagesData/DialogsData"
import messagesData from "./data/messagesData/MessagesData"
import users from "./data/profileData/UserData";
import friendsData from "./data/sidebarData/friends";


export const state =
    {
        _callSubscriber() {
            console.log('State changed')
        },

        subscribe(observer) { //Функция-наблюдатель
            this._callSubscriber = observer
        },

        profilePage: //Страница профилей
            {
                users, //Данные о пользователях
                postsData, //Данные о постах
                functions: { //Функции страницы профилей
                    addPost: (post) => {
                        const newPost = { //Создание нового поста
                            id: postsData.length + 1,
                            post__authorName: "ShaggyBa",
                            post__authorImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
                            post__text: post,
                            post__likes: 0,
                            post__images: ""
                        }
                        state.profilePage.postsData.unshift(newPost) //Добавление нового поста в начало списка постов
                        state.profilePage.values.postState = "" //Обнуление состояния текстового поля
                        state._callSubscriber() //Обновление DOM-дерева
                    },
                    updateNewPostText: (newText) => {
                        state.profilePage.values.postState = newText
                        state._callSubscriber()
                    }
                },
                values: {
                    postState: "" //Обычное состояние текстового поля добавления поста
                }
            },
        messages:
            {
                dialogsData, //Данные о диалогах
                messagesData //Данные о сообщениях
            },
        sidebar:
            {
                friendsData //Данные о друзьях
            },
    }


export const store = {

    _state: {
        profilePage: //Страница профилей
            {
                users, //Данные о пользователях
                postsData, //Данные о постах
            },
        messages:
            {
                dialogsData, //Данные о диалогах
                messagesData //Данные о сообщениях
            },
        sidebar:
            {
                friendsData //Данные о друзьях
            },
    },

    values: {
        postState: "" //Обычное состояние текстового поля добавления поста
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


    _addPost() {
        const newPost = { //Создание нового поста
            id: postsData.length + 1,
            post__authorName: "ShaggyBa",
            post__authorImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
            post__text: this.values.postState,
            post__likes: 0,
            post__images: ""
        }
        this._state.profilePage.postsData.unshift(newPost) //Добавление нового поста в начало списка постов
        this.values.postState = "" //Обнуление состояния текстового поля
        this._callSubscriber() //Обновление DOM-дерева
    },

    _updateNewPostText(newText) {
        this.values.postState = newText
        this._callSubscriber()
    },

    dispatch(action) { //{type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            this._addPost()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") { //{type: "UPDATE-NEW-POST-TEXT", value: "текст поста"}
           this._updateNewPostText(action.value)
        }
    }
}
