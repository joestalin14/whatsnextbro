import React, { Component } from 'react'

import './sub-list.sass'

import SubListItem from '../sub-list-item'

export default class SubList extends Component {
  render () {
    const { subitems,
            onSubToggleImportant,
            onSubToggleDone,
            onSubDelete,
            mainId } = this.props

    let sublist = null

    if (subitems.length > 0) {
      sublist = subitems.map(({label, id, important, done}) => {
        return (
          <li
            className='list-group-item'
            key={id} >
            <span className='num'>
              -
            </span>
            <SubListItem
              label={label}
              important={important}
              done={done}
              onSubToggleImportant={() => onSubToggleImportant(mainId, id)}
              onSubToggleDone={() => onSubToggleDone(mainId, id)}
              onSubDelete={() => onSubDelete(mainId, id)}
            />
          </li>
        )
      })
    }

    return (
      <ul className='list-group sub-list'>
        { sublist }
      </ul>
    )
  }
}
