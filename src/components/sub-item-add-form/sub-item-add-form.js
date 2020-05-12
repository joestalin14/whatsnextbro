import React, { Component } from 'react'

import './sub-item-add-form.sass'

export default class SubItemAddForm extends Component {
  
  state = {
    label: ''
  }

  onInputChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onAddSubItem(this.props.mainId, this.state.label)
    this.setState({
      label: ''
    })
    this.props.addFormHidden()
  }
  
  render () {
    return (
      <form 
        className='sub-item-add-form d-flex'
        onSubmit={this.onFormSubmit}>
        <input 
          type='text'
          className='form-control'
          placeholder='Something else?'
          value={this.state.label}
          onChange={this.onInputChange} 
        />
        <button className='btn btn-dark'>Add</button>
      </form>
    )
  }
}
