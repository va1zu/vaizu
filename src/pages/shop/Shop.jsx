import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import Header from '../../comp/header/Header'
import cl from '../shop/Shop.module.css'
const Index = () => {
  return (
<>
<div className={cl.container}>
<Header />
</div>
</>
  )
}

export default Index
