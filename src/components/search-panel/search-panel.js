import React, { Component } from 'react'

import './search-panel.sass'

export default class SearchPanel extends Component {
  
  onInputChange = (e) => {
    this.props.onSearching(e.target.value)
  }
  
  render () {
    return (
      <input 
        type='text'
        className='form-control'
        placeholder='Search...'
        onChange={this.onInputChange} 
      />
    )
  }
}
