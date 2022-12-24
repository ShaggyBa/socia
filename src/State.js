import postsData from "./data/profileData/Posts/PostsData"
import dialogsData from "./data/messagesData/DialogsData"
import messagesData from "./data/messagesData/MessagesData"
import users from "./data/profileData/UserData";
import friendsData from "./data/sidebarData/friends";


let rerenderEntireTree = () => {}
export const state =
    {
        profilePage:
            {
                users,
                postsData,
                functions: {
                    addPost: (post) => {
                        const newPost = {
                            id: 7,
                            post__authorName: "ShaggyBa",
                            post__authorImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
                            post__text: post,
                            post__likes: 0,
                            post__images: ""
                        }
                        postsData.unshift(newPost)
                        state.profilePage.values.postState = ""
                        rerenderEntireTree()
                    },
                    updateNewPostText: (newText) => {
                        state.profilePage.values.postState = newText
                        rerenderEntireTree()
                    }
                },
                values: {
                    postState: ""
                }
            },
        messages:
            {
                dialogsData,
                messagesData
            },
        sidebar:
            {
                friendsData
            },
        subscribe: (observer) => {
            rerenderEntireTree = observer
        }
    }

