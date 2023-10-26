import axios from "axios"


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "40bb3342-9f88-4621-be93-98a913ff7653"
	}
})

export const usersAPI = {
	getUsers: (page = 1, pageSize = 5) => instance.get(`users?page=${page}&count=${pageSize}`).then(responce => responce.data),
	follow: (userId) => instance.post(`follow/${userId}`, {}).then(responce => responce.data),
	unFollow: (userId) => instance.delete(`follow/${userId}`, {}).then(responce => responce.data)
}