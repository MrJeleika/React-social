import $ from 'jquery'
import { APIcheckIsAuth, APIfollow, APIgetMyProfile, APIgetProfileStatus, APIgetUserProfile, APIgetUsers, APIisFollow, APIlogin, APIlogout, APIunfollow, APIupdateProfileStatus } from '../api/api'

const DELETE_POST = 'DELETE-POST'
const GET_EDIT_INFO = 'GET-EDIT-INFO'
const SAVE_EDITED_POST = 'SAVE-EDITED-POST'
const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_USERS_TO_STATE = 'SET-USERS-TO-STATE'
const IS_FETCHING = 'IS-FETCHING'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE_NUM = 'SET-CURRENT-PAGE-NUM'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const CHANGE_TEXT_COLOR = 'CHANGE-TEXT-COLOR'
const UPDATE_STATUS_BODY_TEXT = 'UPDATE-STATUS-BODY-TEXT'
const IS_AUTH = 'IS-AUTH'
const SET_MY_PROFILE_STATUS = 'SET-MY-PROFILE-STATUS'
const IS_LOGIN_ERROR = 'IS-LOGIN-ERROR' 
const FOLLOW ='FOLLOW'
const IS_FOLLOW = 'IS-FOLLOW'

let initialState = {
  postsList: [
    {id:1, title: 'asdasdasdasd',text: 'asdasd'},
    {id:2, title: 'asd',text: 'asdasd'},
  ],
  usersList: [],
  isFetching: false,
  totalUsersCount: '',
  currentPageNum: 1,
  userProfile: null,
  statusBodyText: '',
  myProfileStatus: '',
  isAuth: false,
  isLoginError: false,
  isFollow: false,
}

const socialReducer = (state = initialState, action) =>{
  switch (action.type) {
    case DELETE_POST:
      return{
        ...state,
        ...state.postsList.splice(action.postId - 1,1)
      }
    
    case GET_EDIT_INFO:
      // Get post info to edit
      return {
        ...state,
        editBodyTitle: state.postsList[action.id].title,
        editBodyText: state.postsList[action.id].text,

      }

    case SAVE_EDITED_POST:
      return{
        ...state,
        ...state.postsList[action.id].title = action.editedPostTitle,
        ...state.postsList[action.id].text = action.editedPostText,
        // reset body text after saving

      }
    case ADD_NEW_POST:
      return{
        ...state,
        postsList: [...state.postsList,{
          id: state.postsList.length + 1,
          title: action.newPostTitle,
          text: action.newPostText,
        }],
      }
    case SET_USERS_TO_STATE:
      return{
        ...state,
        usersList: [...action.users]
      }
    case IS_FETCHING:
      return{
        ...state,
        isFetching: action.boolean
      }
    case SET_TOTAL_USERS_COUNT:
      return{
        ...state,
        totalUsersCount: action.totalCount
      }
    case SET_CURRENT_PAGE_NUM:
      return{
        ...state,
        currentPageNum: action.currentPageNum
      }
    case SET_USER_PROFILE:
      return{
        ...state,
        userProfile: action.userProfile
      }
    case CHANGE_TEXT_COLOR:
      action.element.target === document.activeElement ? 
      $(action.element.target).prev().css("color", "#3a5a40")
      :
      $(action.element.target).prev().css("color", "#588157")
      return{
        ...state
      }
    case UPDATE_STATUS_BODY_TEXT:
      return{
        ...state,
        statusBodyText: action.statusText
      }
    case IS_AUTH: 
      return{
        ...state,
        isAuth: action.isAuth
      }
    case SET_MY_PROFILE_STATUS:
      return{
        ...state,
        myProfileStatus: action.profileStatus,
        statusBodyText: action.profileStatus
      }
    case IS_LOGIN_ERROR:
      return{
        ...state,
        isLoginError: action.isError
      }
    case FOLLOW:
      return{
        ...state,
        ...state.usersList[action.stateUserId].followed = !state.usersList[action.stateUserId].followed
      }
    case IS_FOLLOW:
      return{
        ...state,
        isFollow: action.isFollow
      }
    default: 
      return {...state}
  }
}



export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const getEditInfo = (id) => ({type: GET_EDIT_INFO, id})
export const saveEditedPost = (editedPostTitle, editedPostText,id) => ({type: SAVE_EDITED_POST,editedPostTitle,editedPostText,id})
export const addNewPost = (newPostTitle, newPostText) => ({type: ADD_NEW_POST,newPostTitle, newPostText})
export const setUsersToState = (users) => ({type: SET_USERS_TO_STATE,users})
export const isFetching = (boolean) => ({type: IS_FETCHING,boolean})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT,totalCount})
export const setCurrentPageNum = (currentPageNum) => ({type: SET_CURRENT_PAGE_NUM, currentPageNum})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const changeTextColor = (element) => ({type: CHANGE_TEXT_COLOR, element})
export const updateStatusBodyText = (statusText) => ({type: UPDATE_STATUS_BODY_TEXT, statusText})
export const isAuth = (isAuth) => ({type: IS_AUTH, isAuth})
export const setMyProfileStatus = (profileStatus) => ({type: SET_MY_PROFILE_STATUS, profileStatus})
export const isLoginError = (isError) => ({type: IS_LOGIN_ERROR, isError})
export const follow = (stateUserId) => ({type: FOLLOW, stateUserId})
export const isFollow = (isFollow) => ({type: FOLLOW, isFollow})


// THUNKS
export const getUsersThunk = (currentPageNum) =>{
  return async (dispatch) => {
     dispatch(isFetching(true))
   let response = await APIgetUsers(currentPageNum)
      dispatch(setUsersToState(response.items))
      dispatch(setTotalUsersCount(response.totalCount))
      dispatch(isFetching(false))
  }
}

export const getUserProfileThunk = (userId) =>{
  return async (dispatch) => {
      dispatch(isFetching(true))
    let response = await APIgetUserProfile(userId)
      dispatch(setUserProfile(response))
      dispatch(isFetching(false))
  }
}

export const getMyProfileThunk = () =>{
  return async (dispatch) => {
      dispatch(isFetching(true))
   let response = await APIgetMyProfile()
      dispatch(setUserProfile(response))
      dispatch(isFetching(false))
  }
}

export const checkIsAuthThunk = () =>{
  return async (dispatch) =>{
      dispatch(isFetching(true))
    let response = await APIcheckIsAuth()
      dispatch(isAuth(response))
      dispatch(isFetching(false))
  }
}

export const updateProfileStatusThunk = (status) =>{
  return async (dispatch) =>{
    dispatch(isFetching(true))
   await APIupdateProfileStatus(status)
   let response = await APIgetProfileStatus()
     dispatch(setMyProfileStatus(response))
     dispatch(isFetching(false))

  }
}
export const getProfileStatusThunk = () =>{
  return async (dispatch) =>{
    dispatch(isFetching(true))
  let response = await APIgetProfileStatus()
    dispatch(setMyProfileStatus(response))
    dispatch(isFetching(false))
  }
}
export const login = (data) =>{
  return async (dispatch) => {
     dispatch(isFetching(true))
  let response = await APIlogin(data)
      if(response === 0) {
         dispatch(isAuth(true))
         dispatch(isLoginError(false))
      }else{
        // show error on login page
        dispatch(isLoginError(true))
      }
      dispatch(isFetching(false))
  }
}
export const logoutThunk = () =>{
  return async (dispatch) => {
      dispatch(isFetching(true))
      await APIlogout()
      dispatch(isAuth(false))
      dispatch(isFetching(false))
  }
}
export const followThunk = (id,stateUserId = null) =>{
  return async (dispatch) => {
    dispatch(isFetching(true))
    let response = await APIfollow(id)
      if(response === 0 && stateUserId !== null){
        dispatch(follow(stateUserId))
      }
      dispatch(isFetching(false))
  }
}
export const unfollowThunk = (id,stateUserId = null) =>{
  return async (dispatch) => {
    dispatch(isFetching(true))
    let response = await APIunfollow(id)
      if(response === 0 && stateUserId !== null){
        dispatch(follow(stateUserId))
      }
      dispatch(isFetching(false))
  }
}
export const isFollowThunk = (id) =>{
  return async(dispatch) => {
      dispatch(isFetching(true))
    let response = await APIisFollow(id)
      dispatch(isFollow(response))
      dispatch(isFetching(false))
  }
}

export default socialReducer