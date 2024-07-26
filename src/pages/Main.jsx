import React from 'react'
import { NavLink } from "react-router-dom";
export const Main = () => {
  return (
    <>
    <NavLink to="/shop" >Shop </NavLink>
    <NavLink to="/contact" >Contact </NavLink>
    <NavLink to="/about" >About </NavLink>
    </>
  )
}



export default Main