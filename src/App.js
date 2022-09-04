import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import PostsContainer from './components/Posts/PostsContainer';
import UsersContainer from './components/Users/UsersContainer'


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <div className='container'>
         <Header/>
         <div className='main'>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
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
