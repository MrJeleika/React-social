import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'
import Modal from 'react-modal';
import { useState } from 'react';
import $ from 'jquery'


const Posts = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenAddPost, setIsOpenAddPost] = useState(false)

  const changeTextColor = (e) =>{
    e.target === document.activeElement ? 
    $(e.target).prev().css("color", "#3a5a40")
    :
    $(e.target).prev().css("color", "#588157")
  }

  return (
    <div>
      <div className={`${s.posts} block`}>
        <div className={s.row}>
          <div className='title'>
              Posts
          </div>
              <Modal
            isOpen={modalIsOpenAddPost}
            className={s.modal}
            overlayClassName={s.modalOverlay}
            onRequestClose={() => setIsOpenAddPost(false)}
            >
              <div className={s.edit}>
                <div className={`${s.edit} title`}>
                  Add post
                </div>
                <div className={s.modal__body}>
                  <div className={s.edit__inputName}>
                    Title
                  </div>
                  <textarea minlength='3' onChange={(e) => {props.updateNewPostBodyTitle(e.target.value)}} onFocus={(e) => changeTextColor(e)} onBlur={(e) => changeTextColor(e)} type="text" className={s.edit__input} value={props.social.addNewPostTitle}/>
                  <div className={s.edit__inputName}>
                    Text
                  </div>
                  <textarea minlength='3' onChange={(e) => {props.updateNewPostBodyText(e.target.value)}} onFocus={(e) => changeTextColor(e)} onBlur={(e) => changeTextColor(e)} type="text" className={s.edit__input} value={props.social.addNewPostText}/>
                  <div className={`${s.edit__button} button`} onClick={()=> {props.addNewPost(); setIsOpenAddPost(false)}}>
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
