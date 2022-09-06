import React from 'react';
import s from '../Posts.module.css'
import Modal from 'react-modal';
import { useState } from 'react';

const Post = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const onModalClose = (id) =>{
    setIsOpenEdit(false);
    props.saveEditedPost(id-1);
  }
  return (
    <div>
      <div className={s.post}>
        <div className={s.post__body}>
          <div className={s.post__title}>
            {props.id}. {props.title}
          </div>
          <div className={s.post__text}>
            {props.text}
          </div>
        </div>
        <div className={s.post__options}>
          <div className={`${s.post__button} ${s.post__button_delete}`} onClick={() => props.deletePost(props.id)}>
            Delete
          </div>
          <div className={`${s.post__button} ${s.post__button_edit}`} onClick={() => {setIsOpenEdit(true);props.getEditInfo(props.id-1);}}>
            Edit
          </div>
        </div>
        <Modal
         isOpen={modalIsOpenEdit}
         className='modal'
         overlayClassName='modalOverlay'
         onRequestClose={() => setIsOpenEdit(false)}
        >
          <div>
            <div className={`${s.edit} title`}>
              Edit post
            </div>
            <div className='modal__body'>
              <div className='modal__inputName'>
                Title
              </div>
              <textarea minlength='3' onChange={(e) => {props.updateEditBodyTitle(e.target.value)}} onFocus={(e) => props.changeTextColor(e)} onBlur={(e) => props.changeTextColor(e)} type="text" className='modal__input' value={props.social.editBodyTitle}/>
              <div className='modal__inputName'>
                Text
              </div>
              <textarea minlength='3' onChange={(e) => {props.updateEditBodyText(e.target.value)}} onFocus={(e) => props.changeTextColor(e)} onBlur={(e) => props.changeTextColor(e)} type="text" className='modal__input' value={props.social.editBodyText}/>
              <div className='modal__button button' onClick={() => onModalClose(props.id)}>
                Save
              </div>
            </div>
          </div>
        </Modal>

        
      </div>
    </div>
  );
}

export default Post;
