import React, { Component } from 'react'

import './todo-list.sass'

import TodoListItem from '../todo-list-item'

export default class TodoList extends Component {
  render () {
    const { todos,
            onToggleDone,
            onToggleImportant,
            onDeleteItem,
            upPriority,
            downPriority,
            onSubToggleImportant,
            onSubToggleDone,
            onSubDelete,
            onAddSubItem,
            onEditItem } = this.props

    const items = todos.map((item) => {
      const { id, ...itemProps } = item

      const num = todos.findIndex((el) => el.id === id) + 1 + ' '

      return (
        <li
          className='list-group-item'
          key={id}>
          <span className='num'>
            { num }
          </span>
          <TodoListItem
            {...itemProps}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onDeleteItem={() => onDeleteItem(id)}
            upPriority={() => upPriority(id)}
            downPriority={() => downPriority(id)}
            onSubToggleImportant={onSubToggleImportant}
            onSubToggleDone={onSubToggleDone}
            mainId={id}
            onSubDelete={onSubDelete}
            onAddSubItem={onAddSubItem}
            onEditItem={onEditItem}
          />
        </li>
      )
    })

    return (
      <ul className='list-group todo-list'>
        { items }
      </ul>
    )
  }
}
