import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import PostsContainer from './components/Posts/PostsContainer'
import UsersContainer from './components/Users/UsersContainer'
import UserProfileContainer from './components/Profile/UserProfile/UserProfileContainer'
import MyProfileContainer from './components/Profile/MyProfile/MyProfileContainer'
import HeaderContainer from './components/Header/HeaderComponent'
import LoginContainer from './components/Login/LoginComponent'

// Styles
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <HeaderContainer />
          <div className="main">
            <Routes>
              <Route path="/profile" element={<MyProfileContainer />} />
              <Route
                path="/profile/:userId"
                element={<UserProfileContainer />}
              />
              <Route path="/posts" element={<PostsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
