import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/logo.png'
import Header from '../../comp/header/Header'
import cl from '../programs/Programs.module.css'
const Index = () => {
  return (
    <>
      <div className={cl.container}>
        <Header />
   
      <h1 className={cl.mainTextTop}>Расширения Vs Code</h1>

      <div className={cl.main}>
        <div className={cl.item}>
          <a href="https://marketplace.visualstudio.com/items?itemName=codeium.codeium">
            <img src="https://plugins.jetbrains.com/files/20540/579964/icon/pluginIcon.png" alt="" />
            <h3>Codeium</h3>
          </a>
          <p>Искуственный интеллект для VS Code (бесплатный)</p>
        </div>
        <div className={cl.item}>
          <a href="https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets">
            <img src="https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/4.4.3/1645189962576/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
            <h3>ES7 React/Redux/GraphQL/React-Native snippets</h3>
          </a>
          <p>Быстрые комманды для React</p>

        </div>
        <div className={cl.item}>
          <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">
            <img src="https://raw.githubusercontent.com/ritwickdey/vscode-live-server-plus-plus/master/images/vscode-live-server-plus-plus.png" alt="" />
            <h3>Live Server</h3>
          </a>
          <p>Открыть сайт в браузере</p>


        </div>
   </div>
      </div>
    </>
  )
}

export default Index
