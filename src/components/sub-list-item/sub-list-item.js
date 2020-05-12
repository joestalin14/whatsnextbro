import React, { Component } from 'react'

import './sub-list-item.sass'

export default class SubListItem extends Component {
  render () {
    const { label,
            onSubToggleImportant,
            onSubToggleDone,
            onSubDelete,
            important,
            done } = this.props

    let classNames = 'sub-list-item'

    if (important) {
      classNames += ' important'
    }
    if (done) {
      classNames += ' done'
    }

    return (
      <span className={classNames}>
        <span
          className='sub-list-item-label'
          onClick={onSubToggleDone} >
          { label }
        </span>
        <span className='buttons-group'>
          <button
            className='btn btn-outline-warning float-right'
            title='Make important'
            onClick={onSubToggleImportant} >
            <i className='fa fa-exclamation' />
          </button>
          <button
            className='btn btn-outline-dark float-right'
            title='Delete item'
            onClick={onSubDelete} >
            <i className='fa fa-trash-o' />
          </button>
        </span>
      </span>
    )
  }
}
