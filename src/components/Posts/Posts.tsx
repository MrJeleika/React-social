// Components
import { AddPostModal } from 'components/Modal/AddPostModal'
import { Post } from './Post/Post'

// Styles
import s from './Posts.module.scss'

export const Posts = (props: any) => {
  return (
    <div>
      <div className={`${s.posts} block`}>
        <div className={s.row}>
          <div className="title">Posts</div>

          <div>
            <AddPostModal {...props} />
          </div>
        </div>
        <div className={s.postList}>
          {props.social.postsList.map((post: any, i: number) => (
            <Post
              {...props}
              title={post.title}
              post={post}
              text={post.text}
              id={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
