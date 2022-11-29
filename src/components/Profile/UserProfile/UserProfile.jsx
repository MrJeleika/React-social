import { Preloader } from 'components/common/Preloader'
import React from 'react'
import { useEffect } from 'react'
import s from '../Profile.module.css'
import ProfileLinks from '../ProfileLinks/ProfileLinks'

const UserProfile = (props) => {
  useEffect(() => {
    props.getUserProfileThunk(props.router.params.userId)
    props.isFollowThunk(props.router.params.userId)
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
              <div className={s.status}>{props.social.userProfile.aboutMe}</div>
            </div>
            <div className={s.options}>
              <div className={s.links}>
                <ProfileLinks
                  {...props}
                  contacts={props.social.userProfile.contacts}
                />
              </div>
              {props.social.isFollow ? (
                <div
                  onClick={() =>
                    props.unfollowThunk(props.router.params.userId)
                  }
                  className={`${s.user__follow} button`}
                >
                  Unfollow
                </div>
              ) : (
                <div
                  onClick={() => props.followThunk(props.router.params.userId)}
                  className={`${s.user__follow} button`}
                >
                  Follow
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
