import React, { Component } from 'react'
import style from './Heavy.style'

import database from './database.json'

class Heavy extends Component {
  render() {
    return (
      <div className={style.Optional}>
        { database.data.map(item => (
          <div>{item}</div>
        )) }
      </div>
    )
  }
}

export default Heavy
