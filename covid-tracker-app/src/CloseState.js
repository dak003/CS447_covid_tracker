import React, { Component } from 'react'

import axios from 'axios'

class CloseState extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({username: response.data.name}))
  }

  render () {
    return (
        <button className='button' onClick={this.handleClick}>Closures</button>
    )
  }
}
export default CloseState