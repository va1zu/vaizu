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
  <h1 className={cl.mainTextTop}>Услуги:</h1>
<div className={cl.main}>
<div className={cl.item}>
    <NavLink to={'/shop/1'} className={cl.itemText}>
      <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-solutions-landing-page_107791-1920.jpg?w=2000" alt="" />
      <h3>Lorem, ipsum.</h3>
    </NavLink>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium maiores repellat ducimus enim a numquam sunt, ad eaque in? Nesciunt voluptate aperiam doloribus dignissimos cum alias non accusamus totam!</p>
  </div>
  <div className={cl.item}>
    <NavLink to={'/shop/1'} className={cl.itemText}>
      <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-solutions-landing-page_107791-1920.jpg?w=2000" alt="" />
      <h3>Lorem, ipsum.</h3>
    </NavLink>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium maiores repellat ducimus enim a numquam sunt, ad eaque in? Nesciunt voluptate aperiam doloribus dignissimos cum alias non accusamus totam!</p>
  </div>
  <div className={cl.item}>
    <NavLink to={'/shop/1'} className={cl.itemText}>
      <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-solutions-landing-page_107791-1920.jpg?w=2000" alt="" />
      <h3>Lorem, ipsum.</h3>
    </NavLink>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium maiores repellat ducimus enim a numquam sunt, ad eaque in? Nesciunt voluptate aperiam doloribus dignissimos cum alias non accusamus totam!</p>
  </div>
</div>

</div>
</>
  )
}

export default Index
