import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PostsContainer from './components/Posts/PostsContainer';
import UsersContainer from './components/Users/UsersContainer'
import UserProfileContainer from './components/Profile/UserProfile/UserProfileContainer';
import MyProfileContainer from './components/Profile/MyProfile/MyProfileContainer';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <div className='container'>
         <Header/>
         <div className='main'>
          <Routes>
            <Route path='/profile' element={<MyProfileContainer/>}/>
              <Route path='/profile/:userId' element={<UserProfileContainer/>}/>
            <Route path='/posts' element={<PostsContainer/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
          </Routes>
         </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
