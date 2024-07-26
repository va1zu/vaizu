import React from 'react'
import cl from '../header/Header.module.css'
import logo from '../../image/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
<>
<header>
    <div className={cl.logo}>
  <img src={logo} alt="logo" />
  <h1>Личный блог разработанный на React</h1>
  </div>
  <div className={cl.personalAccount}>
    <NavLink to={"/"}>Личный кабинет</NavLink>
  </div>
  
</header>
<menu>
  <NavLink to={"/"}>Главная</NavLink>
  <NavLink to={"/portfolio"}>Портфолио</NavLink>
  <NavLink to={"/shop"}>Услуги</NavLink>
  <NavLink to={"/programs"}>Утилиты</NavLink>
  <NavLink to={"/about"}>Контакты</NavLink>
</menu>
</>
  )
}

export default Header
