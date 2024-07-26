import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import cl from '../mainPage/MainPage.module.css'
import Header from '../../comp/header/Header'

const Index = () => {
  return (
    <>
      <div className={cl.container}>
        <Header />
        <section>
          <div className={cl.hero}>
            <h1><span>VAIZU</span> - Сайт для введения своего личного блога и совершенствия своих способностей.</h1>
          </div>
          <div className={cl.more}>
            <a href="https://mcserv2847.github.io/" target='_blank'>
              Подробнее <span className={cl.arrow}>&#8594;</span>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Index


