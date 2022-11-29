import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Components
import { LogoSVG } from 'components/svgs/LogoSVG'

// Styles
import s from './Header.module.scss'
import '../../App.scss'

export const Header = (props: any) => {
  const [burgerIsOpen, setburgerIsOpen] = useState<boolean>(false)
  useEffect(() => {
    props.checkIsAuthThunk()
  }, [])

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <LogoSVG />
      </div>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink
              to={'/profile'}
              className={({ isActive }) =>
                isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              className={({ isActive }) =>
                isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/users'}
              className={({ isActive }) =>
                isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to={'/profile'} className={s.nav__link}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={s.profile}>
        {props.social.isAuth ? (
          <NavLink
            to={'/login'}
            onClick={() => props.logoutThunk()}
            className={s.nav__link}
          >
            Log out
          </NavLink>
        ) : (
          <NavLink
            to={'/login'}
            className={({ isActive }) =>
              isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link
            }
          >
            Log in
          </NavLink>
        )}
      </div>
      <div className={s.burger}>
        <div
          onClick={() => setburgerIsOpen(!burgerIsOpen)}
          className={
            burgerIsOpen
              ? `${s.burger__icon} ${s.burger__icon_close}`
              : s.burger__icon
          }
        >
          <span></span>
        </div>
        <div
          className={
            burgerIsOpen
              ? s.burger__body
              : `${s.burger__body} ${s.burger__body_hidden}`
          }
        >
          <div className={s.burger__header}>
            <div className={s.logo}>
              <LogoSVG />
            </div>
            <NavLink
              to={'/profile'}
              onClick={() => setburgerIsOpen(!burgerIsOpen)}
              className={s.burger__name}
            >
              RebL
            </NavLink>
            <div className={s.hidden40px}></div>
          </div>
          <div className={s.burger__nav}>
            <ul className={`${s.nav__list} ${s.burger__list}`}>
              <li>
                <NavLink
                  onClick={() => setburgerIsOpen(!burgerIsOpen)}
                  to={'/profile'}
                  className={({ isActive }) =>
                    isActive
                      ? `${s.nav__link} ${s.nav__link_active} ${s.burger__link}`
                      : `${s.nav__link} ${s.burger__link}`
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setburgerIsOpen(!burgerIsOpen)}
                  to={'/posts'}
                  className={({ isActive }) =>
                    isActive
                      ? `${s.nav__link} ${s.nav__link_active} ${s.burger__link}`
                      : `${s.nav__link} ${s.burger__link}`
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setburgerIsOpen(!burgerIsOpen)}
                  to={'/users'}
                  className={({ isActive }) =>
                    isActive
                      ? `${s.nav__link} ${s.nav__link_active} ${s.burger__link}`
                      : `${s.nav__link} ${s.burger__link}`
                  }
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
