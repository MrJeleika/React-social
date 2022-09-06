import $ from 'jquery'
import { APIgetMyProfile, APIgetUserProfile, APIgetUsers } from '../api/api'

const DELETE_POST = 'DELETE-POST'
const GET_EDIT_INFO = 'GET-EDIT-INFO'
const UPDATE_EDIT_BODY_TITLE = 'UPDATE-EDIT-BODY-TITLE'
const UPDATE_EDIT_BODY_TEXT = 'UPDATE-EDIT-BODY-TEXT'
const SAVE_EDITED_POST = 'SAVE-EDITED-POST'
const UPDATE_NEW_POST_BODY_TITLE = 'UPDATE-NEW-POST-BODY-TITLE'
const UPDATE_NEW_POST_BODY_TEXT = 'UPDATE-NEW-POST-BODY-TEXT'
const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_USERS_TO_STATE = 'SET-USERS-TO-STATE'
const IS_FETCHING = 'IS-FETCHING'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE_NUM = 'SET-CURRENT-PAGE-NUM'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const CHANGE_TEXT_COLOR = 'CHANGE-TEXT-COLOR'
const UPDATE_STATUS_BODY_TEXT = 'UPDATE-STATUS-BODY-TEXT'



let initialState = {
  postsList: [
    {id:1, title: 'asdasdasdasd',text: 'asdasd'},
    {id:2, title: 'asd',text: 'asdasd'},
  ],
  editBodyTitle: '',
  editBodyText: '',
  addNewPostTitle: '',
  addNewPostText: '',
  usersList: [],
  isFetching: false,
  totalUsersCount: '',
  currentPageNum: 1,
  userProfile: null,
  statusBodyText: '',
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
    case UPDATE_EDIT_BODY_TITLE:
      return{
        ...state,
        editBodyTitle: action.title
      }
    case UPDATE_EDIT_BODY_TEXT:
      return{
        ...state,
        editBodyText: action.text
      }
    case SAVE_EDITED_POST:
      return{
        ...state,
        ...state.postsList[action.id].title = state.editBodyTitle,
        ...state.postsList[action.id].text = state.editBodyText,
        // reset body text after saving
        editBodyTitle: '',
        editBodyText: '',
      }
    case UPDATE_NEW_POST_BODY_TITLE:
      return{
        ...state,
        addNewPostTitle: action.addNewPostTitle
      }
    case UPDATE_NEW_POST_BODY_TEXT:
      return{
        ...state,
        addNewPostText: action.addNewPostText
      }
    case ADD_NEW_POST:
      return{
        ...state,
        postsList: [...state.postsList,{
          id: state.postsList.length + 1,
          title: state.addNewPostTitle,
          text: state.addNewPostText,
        }],
        addNewPostTitle: '',
        addNewPostText: '',
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
    default: 
      return {...state}
  }
}



export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const getEditInfo = (id) => ({type: GET_EDIT_INFO, id})
export const updateEditBodyTitle = (title) => ({type: UPDATE_EDIT_BODY_TITLE, title})
export const updateEditBodyText = (text) => ({type: UPDATE_EDIT_BODY_TEXT, text})
export const saveEditedPost = (id) => ({type: SAVE_EDITED_POST,id})
export const updateNewPostBodyText = (addNewPostText) => ({type: UPDATE_NEW_POST_BODY_TEXT, addNewPostText})
export const updateNewPostBodyTitle = (addNewPostTitle) => ({type: UPDATE_NEW_POST_BODY_TITLE, addNewPostTitle})
export const addNewPost = () => ({type: ADD_NEW_POST})
export const setUsersToState = (users) => ({type: SET_USERS_TO_STATE,users})
export const isFetching = (boolean) => ({type: IS_FETCHING,boolean})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT,totalCount})
export const setCurrentPageNum = (currentPageNum) => ({type: SET_CURRENT_PAGE_NUM, currentPageNum})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const changeTextColor = (element) => ({type: CHANGE_TEXT_COLOR, element})
export const updateStatusBodyText = (statusText) => ({type: UPDATE_STATUS_BODY_TEXT, statusText})

export const getUsersThunk = (currentPageNum) =>{
  return (dispatch) => {
    dispatch(isFetching(true))
    APIgetUsers(currentPageNum).then(response =>{
      dispatch(setUsersToState(response.items))
      dispatch(setTotalUsersCount(response.totalCount))
      dispatch(isFetching(false))
    })
  }
}

export const getUserProfileThunk = (userId) =>{
  return (dispatch) => {
      dispatch(isFetching(true))
    APIgetUserProfile(userId).then(response =>{
      dispatch(setUserProfile(response))
      dispatch(isFetching(false))
    })
  }
}

export const getMyProfileThunk = () =>{
  return (dispatch) => {
      dispatch(isFetching(true))
    APIgetMyProfile().then(response =>{
      dispatch(setUserProfile(response))
      dispatch(isFetching(false))
    })
  }
}

export default socialReducer