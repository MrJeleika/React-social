import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a5d9edb8-4508-410c-a678-b4c99c2b4972',
  },
})

export const APIgetUsers = (currentPage = 1) => {
  return instance.get(`users?page=${currentPage}`).then((response) => {
    return response.data
  })
}
export const APIgetUserProfile = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => {
    return response.data
  })
}
export const APIgetMyProfile = () => {
  return instance.get(`auth/me`).then((response) => {
    return instance
      .get(`profile/${response.data.data.id}`)
      .catch((err) => console.log(err))
      .then((response) => {
        return response.data
      })
  })
}
// Check is user autorithed
export const APIcheckIsAuth = () => {
  return instance.get('auth/me').then((response) => {
    return response.data.resultCode === 0 ? true : false
  })
}
export const APIupdateProfileStatus = (status = '') => {
  return instance
    .put('profile/status', { status: status })
    .then((response) => {})
}
export const APIgetProfileStatus = () => {
  return instance.get(`auth/me`).then((response) => {
    return instance
      .get(`profile/status/${response.data.data.id}`)
      .then((response) => {
        return response.data
      })
  })
}
export const APIlogin = (formData) => {
  return instance.post('auth/login', formData).then((response) => {
    console.log(response)
    return response.data.resultCode
  })
}
export const APIlogout = () => {
  return instance.delete('auth/login').then((response) => {
    console.log(response)
  })
}
export const APIfollow = (id) => {
  return instance.post(`follow/${id}`).then((response) => {
    return response.data.resultCode
  })
}
export const APIunfollow = (id) => {
  return instance.delete(`follow/${id}`).then((response) => {
    return response.data.resultCode
  })
}
export const APIisFollow = (id) => {
  return instance.get(`follow/${id}`).then((response) => {
    return response.data
  })
}
