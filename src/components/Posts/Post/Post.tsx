import React from 'react'
import { EditPostModal } from '../../Modal/EditPostModal'
import s from '../Posts.module.scss'

export const Post = (props: any) => {
  return (
    <div>
      <div className={s.post}>
        <div className={s.post__body}>
          <div className={s.post__title}>
            {props.id}. {props.title}
          </div>
          <div className={s.post__text}>{props.text}</div>
        </div>
        <div className={s.post__options}>
          <div
            className={`${s.post__button} ${s.post__button_delete}`}
            onClick={() => props.deletePost(props.id)}
          >
            Delete
          </div>
          <EditPostModal {...props} post={props.post} />
        </div>
      </div>
    </div>
  )
}
