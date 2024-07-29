import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import cl from '../mainPage/MainPage.module.css'
import Header from '../../comp/header/Header'
import Slider from '../../slider/Slider'



const Index = () => {
  return (
    <>
      <div className={cl.container}>
        <Header />
        <section>
          <div className={cl.hero}>
            <h1><span>VAIZU</span> - Сайт для введения своего личного блога и совершенствия своих способностей.</h1>
          </div>
          <div className={cl.more} >
            <a href="#forme">
              Подробнее <span className={cl.arrow}>&#8594;</span>
            </a>
          </div>
          <div className={cl.forme} id="forme">
            <h1>- Использую совеременные технологии и слежу за трендами</h1>
            <p>Почему именно я?</p>  
            </div>      
              <div className={cl.eclipseMain}>
            <div className={cl.eclipse}>
              <div className={cl.eclipseText}>
                <h1>Адаптивная верстка</h1>
                <p>Ваш лендинг будет корректно отображаться на любых устройствах и разрешениях. Это позволит охватить большую часть аудитории вашего бизнеса. Ни для кого не секрет что сейчас 60-70% пользователей используют смартфоны/планшеты.</p>

              </div>
            </div>
            <div className={cl.eclipse}>
              <div className={cl.eclipseText}>
                <h1>Быстрая загрузка</h1>
                <p>Максимально прорабатываем дизайн лендинга в векторной графике, используем современные форматы изображений SVG, WebP и другие. Добиваемся высоких показателей скорости загрузки по инструментам Google Speed / Яндекс.</p>

              </div>
            </div>
            <div className={cl.eclipse}>
              <div className={cl.eclipseText}>
                <h1>Я всегда на связи</h1>
                <p>Работаем по договору, каждый этап проекта расписывается по чётким срокам, начиная от прототипирования и заканчивая версткой/программированием. Вы можете узнать в любое время на каком этапе работы находится проект.</p>
                </div>
              </div>
            </div>
        </section>
      </div>
      <div className={cl.sliderNone}>
      <Slider />
      </div>
    </>
  )
}

export default Index


