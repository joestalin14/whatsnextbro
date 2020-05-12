import React, { Component } from 'react'

import './app-header.sass'

export default class AppHeader extends Component {
  render () {
    const { todoCount, doneCount } = this.props

    return (
      <div className='app-header d-flex'>
        <div className='logo'>
          <img
            src='./img/logo2.svg'
            alt='' />
        </div>
        <div>
          <span className='badge badge-dark'>
            Do: { todoCount }
          </span>
          <span className='badge badge-warning'>
            Done: { doneCount }
          </span>
        </div>
      </div>
    )
  }
}
