import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import s from '../Posts/Posts.module.scss'
import { Field, Form } from 'react-final-form'
import {
  composeValidators,
  maxLength,
  minLength,
  required,
} from '../../helpers/validators/validators'

export const AddPostModal = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenAddPost, setIsOpenAddPost] = useState(false)

  return (
    <>
      <div className="button" onClick={() => setIsOpenAddPost(true)}>
        Add New
      </div>
      <Modal
        isOpen={modalIsOpenAddPost}
        className="modal"
        overlayClassName="modalOverlay"
        onRequestClose={() => setIsOpenAddPost(false)}
      >
        <div>
          <div className={`${s.edit} title`}>Add post</div>
          <div className="modal__body">
            <AddPostForm {...props} setIsOpenAddPost={setIsOpenAddPost} />
          </div>
        </div>
      </Modal>
    </>
  )
}

const AddPostForm = (props) => {
  const onSubmit = (formData) => {
    props.setIsOpenAddPost(false)
    props.addNewPost(formData.title, formData.text)
  }
  return (
    <Form
      onSubmit={onSubmit}
      className="form"
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form className="form__body" onSubmit={handleSubmit}>
          <div className="modal__inputName">Title</div>
          <Field
            name="title"
            validate={composeValidators(required, minLength(3), maxLength(300))}
          >
            {({ input, meta }) => (
              <div className="form__item">
                <textarea
                  {...input}
                  type="text"
                  placeholder="Title"
                  className={
                    meta.error && meta.touched
                      ? 'form__input form__input_err '
                      : 'form__input'
                  }
                  component={'textarea'}
                />
                {meta.error && meta.touched && (
                  <div className="statusForm__errorMessage">
                    <span>{meta.error}</span>
                  </div>
                )}
              </div>
            )}
          </Field>
          <div className="modal__inputName">Text</div>
          <Field
            name="text"
            validate={composeValidators(required, minLength(3), maxLength(300))}
          >
            {({ input, meta }) => (
              <div className="form__item">
                <textarea
                  {...input}
                  type="text"
                  placeholder="Text"
                  className={
                    meta.error && meta.touched
                      ? 'form__input form__input_err '
                      : 'form__input'
                  }
                  component={'textarea'}
                />
                {meta.error && meta.touched && (
                  <div className="statusForm__errorMessage">
                    <span>{meta.error}</span>
                  </div>
                )}
              </div>
            )}
          </Field>
          <div className="form__item">
            <button type="submit" className="button modal__button">
              Add
            </button>
          </div>
        </form>
      )}
    />
  )
}
