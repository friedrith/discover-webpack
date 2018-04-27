import React, { Component } from 'react'
import loading from './loading.svg'

class Loading extends Component {
  render() {
    return (
      <img src={loading} alt="loading" />
    )
  }
}

export default Loading
