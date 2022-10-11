import React from 'react'
import s from './Users.module.css'
import { useEffect } from 'react'
import User from './User/User'
import Preloader from '../common/Preloader'

const Users = (props) => {
  const pages = []
  useEffect(() => {
    props.getUsersThunk(props.social.currentPageNum)
  }, [props.social.currentPageNum])
  // PAGINATION
  for (
    let i = props.social.currentPageNum - 4;
    pages.length < 9 || i <= Math.ceil(props.social.totalUsersCount / 10);
    i++
  ) {
    if (i > 0) {
      pages.push(i)
    }
  }
  // Show preloader when something loading
  if (props.social.isFetching) {
    return <Preloader />
  }

  return (
    <div>
      <div className={`${s.users} block`}>
        <div className="title">Users</div>

        <div className={s.body}>
          <div className={s.pages}>
            <div className={s.page} onClick={() => props.setCurrentPageNum(1)}>
              1
            </div>
            <div className={s.page}>...</div>
            {pages.map((page) => {
              return (
                <div
                  className={
                    page === props.social.currentPageNum
                      ? `${s.page} ${s.page_active}`
                      : s.page
                  }
                  key={page}
                  onClick={() => props.setCurrentPageNum(page)}
                >
                  {page}
                </div>
              )
            })}
          </div>
          {props.social.usersList.map((user, i) => (
            <User {...props} user={user} id={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Users
