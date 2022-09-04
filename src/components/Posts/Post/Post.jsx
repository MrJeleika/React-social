import React from 'react';
import s from '../Posts.module.css'
import Modal from 'react-modal';
import { useState } from 'react';
import $ from 'jquery'





const Post = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const onModalClose = (id) =>{
    setIsOpenEdit(false);
    props.saveEditedPost(id-1);
  }

  // Change input name color
  const changeTextColor = (e) =>{
    e.target === document.activeElement ? 
    $(e.target).prev().css("color", "#3a5a40")
    :
    $(e.target).prev().css("color", "#588157")
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
         className={s.modal}
         overlayClassName={s.modalOverlay}
         onRequestClose={() => setIsOpenEdit(false)}
        >
          <div className={s.edit}>
            <div className={`${s.edit} title`}>
              Edit post
            </div>
            <div className={s.modal__body}>
              <div className={s.edit__inputName}>
                Title
              </div>
              <textarea minlength='3' onChange={(e) => {props.updateEditBodyTitle(e.target.value)}} onFocus={(e) => changeTextColor(e)} onBlur={(e) => changeTextColor(e)} type="text" className={s.edit__input} value={props.social.editBodyTitle}/>
              <div className={s.edit__inputName}>
                Text
              </div>
              <textarea minlength='3' onChange={(e) => {props.updateEditBodyText(e.target.value)}} onFocus={(e) => changeTextColor(e)} onBlur={(e) => changeTextColor(e)} type="text" className={s.edit__input} value={props.social.editBodyText}/>
              <div className={`${s.edit__button} button`} onClick={() => onModalClose(props.id)}>
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
