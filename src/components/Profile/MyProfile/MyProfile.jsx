import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import Preloader from '../../common/Preloader';
import s from '../Profile.module.css'
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import Modal from 'react-modal';
import { useState } from 'react';
import { APIgetMyProfile } from '../../../api/api';


const MyProfile = (props) => {
  
  Modal.setAppElement(document.querySelector('.App'))
  const [modalIsOpenChangeStatus, setIsChangeStatus] = useState(false)

  const putStatusRequest =() =>{
    axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`,{
                    "status": "props.social.statusBodyText"
                  }, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "a5d9edb8-4508-410c-a678-b4c99c2b4972"
          }
      })
  }
  


  useEffect(()=>{
    props.getMyProfileThunk()
  },[props.router.params.userId])

  // Show preloader when something loading
  if(props.social.isFetching || props.social.userProfile === null){
    return <Preloader/>
  }

  return (
    <div>
      <div className={`${s.profile} block`}>
        <div className='title'>
            Profile
        </div>
        <div className={s.bio}>
          <div className={s.ava}>
            <img src={props.social.userProfile.photos.large ? props.social.userProfile.photos.large : `https://cdn.nftsniper.net/image/GeqLPami4Jc6giea3xrybPUvXfC8NdgmAKLnmkyoJNMA` } alt="" />
          </div>
          <div className={s.body}>
            <div className={s.userInfo}>
              <div className={s.name}>
                {props.social.userProfile.fullName}
              </div>
              <div className={s.status}>
                {props.social.userProfile.aboutMe ? props.social.userProfile.aboutMe : <div className='button' onClick={()=> setIsChangeStatus(true)}>Add Status</div>}
              </div>
            </div>
            <div className={s.options}>
              <div className={s.links}>
                <ProfileLinks {...props} contacts={props.social.userProfile.contacts}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpenChangeStatus}
        className='modal'
        overlayClassName='modalOverlay'
        onRequestClose={() => setIsChangeStatus(false)}
      > 
              <div >
                <div className='title'>
                  Change status
                </div>
                <div className='modal__body'>
                  <div className='modal__inputName'>
                    Status
                  </div>
                  <textarea minLength='3' onChange={(e) => {props.updateStatusBodyText(e.target.value)}} onFocus={(e) => props.changeTextColor(e)} onBlur={(e) => props.changeTextColor(e)} type="text" className='modal__input' value={props.social.statusBodyText}/>
              
                  <div className='modal__button button' onClick={() => putStatusRequest()}>
                    Save
                  </div>
                </div>
              </div>
      </Modal>
    </div>

  );
}

export default MyProfile;
