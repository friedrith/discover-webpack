import React, { Component } from 'react'

import logo from './logo.svg'
import style from './App.style'
import Heavy from '../Heavy/Heavy'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Grenoble</h1>
          <div className={style.divider} />
        </header>
        <Heavy />
      </div>
    )
  }
}

export default App
