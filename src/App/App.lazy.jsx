import React, { Component } from 'react'
import Loadable from 'react-loadable'

import logo from './logo.svg'
import style from './App.style'

/* webpackChunkName: "heavy" */

import Loading from './Loading/Loading'

const LoadableComponent = Loadable({
  loader: () => (
    import('../Heavy/Heavy')
  ),
  loading: Loading,
})

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Grenoble</h1>
          <div className={style.divider} />
        </header>
        <LoadableComponent />
      </div>
    )
  }
}

export default App
