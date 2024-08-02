import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import danya from '../../image/danya.jpg'
import cl from '../about/About.module.css'
import Header from '../../comp/header/Header'

const Index = () => {
  return (
    <>
      <div className={cl.container}>
        <Header />
        <main>
          <div className={cl.mainContact}>
           <div className={cl.textContact}>
           <h1 className={cl.marginB}>Контакты</h1>
            <h6>Telegram:</h6>
            <a href="https://t.me/vaizu" target="_blank">@vaizu</a>
            <h6>Email:</h6>
            <p>vaizu001@yandex.ru</p>
           </div>
          <div className={cl.danya}>
            <img src={danya} alt="" />
          </div>
          </div>
        </main>
      </div>

    </>
  )
}

export default Index
