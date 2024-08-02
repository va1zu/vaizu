import React, { useState } from 'react'
import cl from '../header/Header.module.css'
import logo from '../../image/logo.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <header>
        <div className={cl.logo}>
          <img src={logo} alt="logo" />
          <h1>Личный блог разработанный на React</h1>
        </div>
        <div className={cl.personalAccount}>
          <NavLink to={"https://mcserv2847.github.io/"} target='_blank'>Личный кабинет</NavLink>
        </div>
      </header>
      <div className={nav ? `${cl.menu} ${cl.active}` : cl.menu}>
        <NavLink to={"/"}>Главная</NavLink>
        <NavLink to={"/portfolio"}>Портфолио</NavLink>
        <NavLink to={"/shop"}>Услуги</NavLink>
         <NavLink to={"/programs"}>Расширение Vs Code</NavLink> 
        <NavLink to={"/about"}>Контакты</NavLink>
        <NavLink to={"https://mcserv2847.github.io/"} target='_blank' className={cl.personalAccountMobile}>Личный кабинет</NavLink>
      </div>
        <div onClick={() => setNav(!nav)} className={cl.mobileMenu}>
          {nav ? <AiOutlineClose size={25} color='white' /> : <AiOutlineMenu size={25} color='white' />}
        </div>
    </>
  )
}

export default Header
