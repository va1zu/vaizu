import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import cl from '../about/About.module.css'
import Header from '../../comp/header/Header'

const Index = () => {
  return (
<>
<div className={cl.container}>
<Header />
<main>
  <div className={cl.mainContact}>
    <h1>Контакты</h1>
    <br />
    <h6>Telegram:</h6>
    <a href="https://t.me/vaizu" target="_blank">@vaizu</a>
    <h6>Email:</h6>
    <p>vaizu001@yandex.ru</p>
  </div>
</main>
</div>

</>
  )
}

export default Index
