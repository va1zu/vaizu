import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import Header from '../../comp/header/Header'
import cl from '../portfolio/Portfolio.module.css'

const Index = () => {
  return (
<>
<div className={cl.container}>
<Header />
<h1 className={cl.mainTextTop}>Портфолио:</h1>
<div className={cl.main}>
  <NavLink to={'/portfolio/1'} className={cl.item}>
  <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-solutions-landing-page_107791-1920.jpg?w=2000" alt="" />
  <h3>Вот такой сайт</h3>
  </NavLink>
  <NavLink to={'/portfolio/1'} className={cl.item}>
  <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-solutions-landing-page_107791-1920.jpg?w=2000" alt="" />
  <h3>Вот такой сайт</h3>
  </NavLink>
  <NavLink to={'/portfolio/1'} className={cl.item}>
  <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-solutions-landing-page_107791-1920.jpg?w=2000" alt="" />
  <h3>Вот такой сайт</h3>
  </NavLink>
</div>
</div>
</>
  )
}

export default Index
