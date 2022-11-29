import edit from '../../../assets/img/edit.svg'
import '../../../sass/form/form.css'
import React from 'react'
import { useEffect } from 'react'
import s from '../Profile.module.css'
import ProfileLinks from '../ProfileLinks/ProfileLinks'
import Modal from 'react-modal'
import { useState } from 'react'
import { Field, Form } from 'react-final-form'
import {
  composeValidators,
  maxLength,
  minLength,
  required,
} from '../../../helpers/validators/validators'
import { Preloader } from 'components/common/Preloader'

const MyProfile = (props) => {
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenChangeStatus, setIsChangeStatus] = useState(false)

  useEffect(() => {
    props.getProfileStatusThunk()
    props.getMyProfileThunk()
  }, [props.router.params.userId])

  // Show preloader when something loading
  if (props.social.isFetching || props.social.userProfile === null) {
    return <Preloader />
  }

  return (
    <div>
      <div className={`${s.profile} block`}>
        <div className="title">Profile</div>
        <div className={s.bio}>
          <div className={s.ava}>
            <img
              src={
                props.social.userProfile.photos.large
                  ? props.social.userProfile.photos.large
                  : `https://cdn.nftsniper.net/image/GeqLPami4Jc6giea3xrybPUvXfC8NdgmAKLnmkyoJNMA`
              }
              alt=""
            />
          </div>
          <div className={s.body}>
            <div className={s.userInfo}>
              <div className={s.name}>{props.social.userProfile.fullName}</div>
              <div className={s.status}>
                {props.social.myProfileStatus ? (
                  props.social.myProfileStatus
                ) : (
                  <div
                    className="button"
                    onClick={() => setIsChangeStatus(true)}
                  >
                    Add Status
                  </div>
                )}
                {props.social.myProfileStatus ? (
                  <span className={s.editStatus}>
                    <img
                      src={edit}
                      alt="edit"
                      onClick={() => setIsChangeStatus(true)}
                    />
                  </span>
                ) : null}
              </div>
            </div>
            <div className={s.options}>
              <div className={s.links}>
                <ProfileLinks
                  {...props}
                  contacts={props.social.userProfile.contacts}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpenChangeStatus}
        className="modal"
        overlayClassName="modalOverlay"
        onRequestClose={() => setIsChangeStatus(false)}
      >
        <div>
          <div className="title">Change status</div>
          <div className="modal__body">
            <EditStatusForm {...props} setIsChangeStatus={setIsChangeStatus} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

const EditStatusForm = (props) => {
  const onSubmit = (formData) => {
    props.setIsChangeStatus(false)
    props.updateProfileStatusThunk(formData.status)
  }
  return (
    <Form
      onSubmit={onSubmit}
      className="form"
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form className="form__body" onSubmit={handleSubmit}>
          <div className="modal__inputName">Status</div>
          <Field
            initialValue={props.social.statusBodyText}
            name="status"
            validate={composeValidators(required, minLength(3), maxLength(300))}
          >
            {({ input, meta }) => (
              <div className="form__item">
                <textarea
                  {...input}
                  type="text"
                  placeholder="Status"
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
              Save
            </button>
          </div>
        </form>
      )}
    />
  )
}

export default MyProfile
