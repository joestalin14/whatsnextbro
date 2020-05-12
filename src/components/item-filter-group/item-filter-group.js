import React, { Component } from 'react'

import './item-filter-group.sass'

export default class ItemFilterGroup extends Component {

  buttons = [
    { label: 'All', name: 'all' },
    { label: 'Active', name: 'active' },
    { label: 'Done', name: 'done' }
  ]

  render () {

    const { onFiltered, filter } = this.props

    const buttons = this.buttons.map(({label, name}) => {

      const isActive = filter === name
      let classNames = 'btn'
      switch (isActive) {
        case true:
          classNames += ' btn-dark'
          break;
        default:
          classNames += ' btn-outline-dark'
      }

      return (
        <button
          className={classNames}
          key={name}
          onClick={() => onFiltered(name)} >
          {label}
        </button>
      )
    })

    return (
      <div className='btn-group item-filter-group'>
        { buttons }
      </div>
    )
  }
}
