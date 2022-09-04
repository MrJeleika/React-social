import React from 'react';
import s from '../Users.module.css'

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.user__ava}>
        <img src={props.user.photos.small ? props.user.photos.large : `https://cdn.nftsniper.net/image/GeqLPami4Jc6giea3xrybPUvXfC8NdgmAKLnmkyoJNMA`} alt="" />
      </div>
      <div className={s.user__body}>
        <div className={s.user__info}>
          <div className={s.user__name}>
            {props.user.name}
          </div>
          <div className={s.user__status}>
            {props.user.status}
          </div>
        </div>
        <div className={s.user__options}>
          <div className={`${s.user__follow} button`}>
            Follow
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
