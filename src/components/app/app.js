import React, { Component } from 'react'

import './app.sass'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemFilterGroup from '../item-filter-group'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'

export default class App extends Component {
  
  maxId = 100

  state = {
    todoData: [
      this.createNewElement('Wake up'),
      this.createNewElement('Drink coffee'),
      this.createNewElement('Learn React'),
      this.createNewElement('Create awesome app'),
      { label: 'Selebrate!', 
        done: false, 
        important: false, 
        id: 1234,
        subitems: [
          { label: 'Buy pizza', done: false, important: false, id: 1235 },
          { label: 'Eat pizza', done: false, important: false, id: 1236 }
        ] 
      }
    ],
    filter: 'all',
    search: ''
  }

  createNewElement (label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++,
      subitems: []
    }
  }

  createNewSubElement (label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    }
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id)
    const newEl = { ...arr[idx] }
    newEl[propName] = !arr[idx][propName]
    return [
      ...arr.slice(0, idx),
      newEl,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onDeleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  onFiltered = (value) => {
    this.setState(({filter}) => {
      return {
        filter: value
      }
    })
  }

  filter (arr, filterState) {
    let result
    switch (filterState) {
      case 'all':
        result = arr
        break
      case 'active':
        result = arr.filter((item) => !item.done)
        break
      case 'done':
        result = arr.filter((item) => item.done)
        break
      default:
        result = arr
    } 
    return result
  }

  onSearching = (value) => {
    this.setState(({search}) => {
      return {
        search: value
      }
    })
  }

  search (arr, searchState) {
    return arr.filter((item) => item.label.toLowerCase().indexOf(searchState.toLowerCase()) > -1)
  }

  addItem = (label) => {
    this.setState(({todoData}) => {
      const newData = [
        ...todoData.slice(),
        this.createNewElement(label)
      ]
      return {
        todoData: newData
      }
    })
  }

  upPriority = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      if (idx === 0) {
        return
      }
      const newData = [
        ...todoData.slice(0, idx-1),
        todoData[idx],
        todoData[idx - 1],
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  downPriority = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      if (idx === todoData.length - 1) {
        return
      }
      const newData = [
        ...todoData.slice(0, idx),
        todoData[idx + 1],
        todoData[idx],
        ...todoData.slice(idx + 2)
      ]
      return {
        todoData: newData
      }
    })
  }

  onSubToggleImportant = (id, subid) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newSubArr = this.toggleProperty(todoData[idx].subitems, subid, 'important')
      const newEl = { ...todoData[idx] }
      newEl.subitems = newSubArr
      const newData = [
        ...todoData.slice(0, idx),
        newEl,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  onSubToggleDone = (id, subid) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newSubArr = this.toggleProperty(todoData[idx].subitems, subid, 'done')
      const newEl = { ...todoData[idx] }
      newEl.subitems = newSubArr
      const newData = [
        ...todoData.slice(0, idx),
        newEl,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  onSubDelete = (id, subid) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const subIdx = todoData[idx].subitems.findIndex((el) => el.id === subid)
      const newSubData = [
        ...todoData[idx].subitems.slice(0, subIdx),
        ...todoData[idx].subitems.slice(subIdx + 1)
      ]
      const newEl = { ...todoData[idx] }
      newEl.subitems = newSubData
      const newData = [
        ...todoData.slice(0, idx),
        newEl,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  onAddSubItem = (id, label) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newSubEl = this.createNewSubElement(label)
      const newSubData = [
        ...todoData[idx].subitems,
        newSubEl
      ]
      const newEl = { ...todoData[idx] }
      newEl.subitems = newSubData
      const newData = [
        ...todoData.slice(0, idx),
        newEl,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  onEditItem = (id, label) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newEl = { ...todoData[idx] }
      newEl.label = label
      const newData = [
        ...todoData.slice(0, idx),
        newEl,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }
  
  render () {
    
    const { todoData, filter, search } = this.state
    
    const todoCount = todoData.filter((el) => !el.done).length
    const doneCount = todoData.length - todoCount
    
    const visibleItems = this.filter(this.search(todoData, search), filter)
    
    return (
      <div className='app'>
        <AppHeader 
          todoCount={todoCount}
          doneCount={doneCount} 
        />
        <div className='search-filter d-flex'>
          <SearchPanel onSearching={this.onSearching} />
          <ItemFilterGroup 
            onFiltered={this.onFiltered}
            filter={filter} 
          />
        </div>
        <TodoList 
          todos={visibleItems}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onDeleteItem={this.onDeleteItem}
          upPriority={this.upPriority}
          downPriority={this.downPriority}
          onSubToggleImportant={this.onSubToggleImportant}
          onSubToggleDone={this.onSubToggleDone}
          onSubDelete={this.onSubDelete}
          onAddSubItem={this.onAddSubItem}
          onEditItem={this.onEditItem} 
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    )
  }
}
