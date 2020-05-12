import React, { Component } from 'react'

import './todo-list-item.sass'

import SubList from '../sub-list'
import SubItemAddForm from '../sub-item-add-form'
import EditItemForm from '../edit-item-form'

export default class TodoListItem extends Component {

  state = {
    addFormHidden: true,
    editFormHidden: true
  }

  changeAddFormHidden = () => {
    this.setState({
      addFormHidden: !this.state.addFormHidden
    })
  }

  changeEditFormHidden = () => {
    this.setState({
      editFormHidden: !this.state.editFormHidden
    })
  }

  render () {
    const { label,
            done,
            important,
            subitems,
            onToggleDone,
            onToggleImportant,
            onDeleteItem,
            upPriority,
            downPriority,
            onSubToggleImportant,
            onSubToggleDone,
            mainId,
            onSubDelete,
            onAddSubItem,
            onEditItem } = this.props
            
    let classNames = 'todo-list-item'
    
    if (important) {
      classNames += ' important'
    }
    if (done) {
      classNames += ' done'
    }

    const subitemsList = subitems.length === 0 ? null : <SubList subitems={subitems} onSubToggleImportant={onSubToggleImportant} onSubToggleDone={onSubToggleDone} mainId={mainId} onSubDelete={onSubDelete} />
    
    return (
      <span className={classNames} >
        <span 
          className='todo-list-item-label'
          onClick={onToggleDone} >
          { label }
        </span>
        <span className='buttons-group'>
          <button 
            className='btn btn-outline-dark'
            title='Up priority'
            onClick={upPriority} >
            <i className='fa fa-sort-up' />
          </button>
          <button 
            className='btn btn-outline-dark'
            title='Add subitem'
            onClick={this.changeAddFormHidden} >
            <i className='fa fa-plus' />
          </button>
          <button 
            className='btn btn-outline-warning'
            title='Make important'
            onClick={onToggleImportant} >
            <i className='fa fa-exclamation' />
          </button>
          <button 
            className='btn btn-outline-dark'
            title='Down priority'
            onClick={downPriority} >
            <i className='fa fa-sort-down' />
          </button>
          <button 
            className='btn btn-outline-dark'
            title='Edit item'
            onClick={this.changeEditFormHidden} >
            <i className="fa fa-pencil" />
          </button>
          <button 
            className='btn btn-outline-dark'
            title='Delete item'
            onClick={onDeleteItem} >
            <i className='fa fa-trash-o' />
          </button>
        </span>
        {
          this.state.addFormHidden ? (
            null
          ) : (
            <SubItemAddForm 
              onAddSubItem={onAddSubItem} 
              mainId={mainId} 
              addFormHidden={this.changeAddFormHidden} 
            />
          )
        }
        {
          this.state.editFormHidden ? (
            null
          ) : (
            <EditItemForm 
              value={label} 
              mainId={mainId} 
              onEditItem={onEditItem} 
              editFormHidden={this.changeEditFormHidden} 
            />
          )
        }
        
        { subitemsList }
      </span>
    )
  }
}
