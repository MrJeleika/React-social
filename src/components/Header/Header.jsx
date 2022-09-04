import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/snapsvg-seeklogo.com.svg'

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="" />
      </div>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink to={'/profile'} className={({isActive}) => isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={'/posts'} className={({isActive}) => isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={'/users'} className={({isActive}) => isActive ? `${s.nav__link} ${s.nav__link_active}` : s.nav__link}>
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

      </div>
    </header>
  );
}

export default Header;
