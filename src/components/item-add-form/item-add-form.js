import React, { Component } from 'react'

import './item-add-form.sass'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: ''
    })
  }

  onInputChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  
  render () {
    return (
      <form 
        className='item-add-form d-flex'
        onSubmit={this.onFormSubmit} >
        <input 
          type='text'
          className='form-control'
          placeholder="What's next, bro?"
          onChange={this.onInputChange}
          value={this.state.label} 
        />
        <button className='btn btn-dark'>Add</button>
      </form>
    )
  }
}
