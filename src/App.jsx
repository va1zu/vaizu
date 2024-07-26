import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import Shop from './pages/shop/Shop'
import Programs from './pages/programs/Programs'
// @ts-ignore //Игнорит ошибуку
import Contact from './pages/Contact'
import About from './pages/about/About';
// @ts-ignore //Игнорит ошибуку
import MainPage from './pages/mainPage/MainPage'
import Portfolio from './pages/portfolio/Portfolio';
import Os from './pages/Osnova';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}


export default App