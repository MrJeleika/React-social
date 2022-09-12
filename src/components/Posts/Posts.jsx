import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'
import AddPostModal from '../Modal/AddPostModal';


const Posts = (props) => {

  return (
    <div>
      <div className={`${s.posts} block`}>
        <div className={s.row}>
          <div className='title'>
              Posts
          </div>

          <div>
            <AddPostModal {...props}/>
          </div>

        </div>
        <div className={s.postList}>
          {props.social.postsList.map((post,i) => 
            <Post {...props} title={post.title} post={post} text={post.text} id={i+1}  key={i}/>
          )
          }
        </div>
      </div>
    </div>
    
  );
}

export default Posts;
