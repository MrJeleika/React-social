import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import s from '../Posts/Posts.module.css'
import { Field, Form } from 'react-final-form';
import { composeValidators, maxLength, minLength, required } from '../../helpers/validators/validators';

const EditPostModal = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  return (
    <>
    <div className={`${s.post__button} ${s.post__button_edit}`} onClick={() => {setIsOpenEdit(true);props.getEditInfo(props.id-1);}}>
      Edit
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
        <EditPostForm {...props} setIsOpenEdit={setIsOpenEdit} />
       </div>
     </div>
   </Modal>
    </>

  );
}

const EditPostForm = (props) => {

  const onSubmit = (formData) =>{
    props.setIsOpenEdit(false)
    props.saveEditedPost(formData.title, formData.text, props.id-1);
  }
  return(
     <Form onSubmit={onSubmit} className='form' render={({handleSubmit, form, submitting, pristine, values }) =>(
      <form className='form__body' onSubmit={handleSubmit}>
        <div className='modal__inputName'>
         Title
        </div>
        <Field initialValue={props.s} name='title' validate={composeValidators(required, minLength(3),maxLength(300))}>
          {({input, meta,})=> (
            <div className='form__item'>
              <textarea {...input} type="text" placeholder='Title' className={(meta.error && meta.touched) ? 'form__input form__input_err ' : 'form__input'} component={'textarea'}/>
              {meta.error && meta.touched &&
               <div className='statusForm__errorMessage'><span>{meta.error}</span></div>}
            </div>
          )} 
        </Field>
        <div className='modal__inputName'>
         Text
        </div>
        <Field name='text' validate={composeValidators(required, minLength(3),maxLength(300))}>
          {({input, meta,})=> (
            <div className='form__item'>
              <textarea {...input} type="text" placeholder='Text' className={(meta.error && meta.touched) ? 'form__input form__input_err ' : 'form__input'} component={'textarea'}/>
              {meta.error && meta.touched &&
               <div className='statusForm__errorMessage'><span>{meta.error}</span></div>}
            </div>
          )} 
        </Field>
        <div className='form__item'>
          <button type='submit' className='button modal__button'>
            Save
          </button>
        </div>
      </form>
     )}/>    
  );
}

export default EditPostModal;
