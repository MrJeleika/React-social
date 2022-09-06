import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "a5d9edb8-4508-410c-a678-b4c99c2b4972",
  }
})

export const APIgetUsers = (currentPage = 1) =>{
  return instance.get(`users?page=${currentPage}`).then(response =>{
    return response.data
  })
}
export const APIgetUserProfile = (userId) => {
  return instance.get(`profile/${userId}`).then(response =>{
    return response.data
  })
}
export const APIgetMyProfile = () => {
  return instance.get(`auth/me`).then(response =>{
   return instance.get(`profile/${response.data.data.id}`).then(response => {
      return response.data
    })
  })
}
