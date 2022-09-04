import React from 'react';
import s from './Profile.module.css'

const Profile = (props) => {
  return (
    <div>

      <div className={`${s.profile} block`}>
        <div className='title'>
            Profile
        </div>
        <div className={s.bio}>

          <div className={s.ava}>
            <img src="https://cdn.nftsniper.net/image/GeqLPami4Jc6giea3xrybPUvXfC8NdgmAKLnmkyoJNMA" alt="" />
          </div>
          <div className={s.body}>
            <div className={s.name}>
              Cats on Krack
            </div>
            <div className={s.status}>
              FP: 30sol
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
