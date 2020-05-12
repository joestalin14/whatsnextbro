import React, { Component } from 'react'

import './edit-item-form.sass'

export default class EditItemForm extends Component {

  state = {
    label: this.props.value
  }

  onInputChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onEditItem(this.props.mainId, this.state.label)
    this.props.editFormHidden()
  }
  
  render () {
    
    return (
      <form 
        className='edit-item-form d-flex'
        onSubmit={this.onFormSubmit} >
        <input 
          type='text'
          className='form-control'
          value={this.state.label}
          onChange={this.onInputChange} 
        />
        <button className='btn btn-dark'>Edit</button>
      </form>
    )
  }
}
