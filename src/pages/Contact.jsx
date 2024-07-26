import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../image/logo.png'
import './index.css'


const Index = () => {
  return (
<>
<header>
    <div className="logo">
  <img src={logo} alt="logo" />
  <h1>Личный блог разработанный на React</h1>
  </div>
  <div className="personal-account">
    <button>
    <NavLink to={"/"}>Личный кабинет</NavLink>
    </button>
  </div>
</header>
<menu>
  <NavLink to={"/"}>Главная</NavLink>
  <NavLink to={"/portfolio"}>Портфолио</NavLink>
  <NavLink to={"/shop"}>Услуги</NavLink>
  <NavLink to={"/programs"}>Утилиты</NavLink>
  <NavLink to={"/about"}>Контакты</NavLink>
</menu>
<main>
  <h1>Контакты</h1>
</main>
</>
  )
}

export default Index
