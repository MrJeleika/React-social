import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'
import Modal from 'react-modal';
import { useState } from 'react';
import $ from 'jquery'


const Posts = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenAddPost, setIsOpenAddPost] = useState(false)

  return (
    <div>
      <div className={`${s.posts} block`}>
        <div className={s.row}>
          <div className='title'>
              Posts
          </div>
              <Modal
            isOpen={modalIsOpenAddPost}
            className='modal'
            overlayClassName='modalOverlay'
            onRequestClose={() => setIsOpenAddPost(false)}
            >
              <div>
                <div className={`${s.edit} title`}>
                  Add post
                </div>
                <div className='modal__body'>
                  <div className='modal__inputName'>
                    Title
                  </div>
                  <textarea minlength='3' onChange={(e) => {props.updateNewPostBodyTitle(e.target.value)}} onFocus={(e) => props.changeTextColor(e)} onBlur={(e) => props.changeTextColor(e)} type="text" className='modal__input' value={props.social.addNewPostTitle}/>
                  <div className='modal__inputName'>
                    Text
                  </div>
                  <textarea minlength='3' onChange={(e) => {props.updateNewPostBodyText(e.target.value)}} onFocus={(e) => props.changeTextColor(e)} onBlur={(e) => props.changeTextColor(e)} type="text" className='modal__input' value={props.social.addNewPostText}/>
                  <div className='modal__button button' onClick={()=> {props.addNewPost(); setIsOpenAddPost(false)}}>
                    Add
                  </div>
                </div>
              </div>
            </Modal>
          <div>
            <div className='button' onClick={() => setIsOpenAddPost(true)}>
              Add New
            </div>
          </div>

        </div>
        <div className={s.postList}>
          {props.social.postsList.map((post,i) => 
            <Post {...props} title={post.title} text={post.text} id={i+1}  key={i}/>
          )
          }
        </div>
      </div>
    </div>
    
  );
}

export default Posts;
