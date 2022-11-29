import React from 'react'

// Components
import { EditPostModal } from 'components/Modal/EditPostModal'

//Styles
import s from '../Posts.module.scss'

interface iProps {
  id: number
  title: string
  text: string
  post: object
  deletePost: Function
}

export const Post = (props: iProps) => {
  const { id, title, text, post, deletePost } = props

  return (
    <div>
      <div className={s.post}>
        <div className={s.post__body}>
          <div className={s.post__title}>
            {id}. {title}
          </div>
          <div className={s.post__text}>{text}</div>
        </div>
        <div className={s.post__options}>
          <div
            className={`${s.post__button} ${s.post__button_delete}`}
            onClick={() => deletePost(props.id)}
          >
            Delete
          </div>
          <EditPostModal {...props} post={post} />
        </div>
      </div>
    </div>
  )
}
