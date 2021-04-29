import React, { Component } from 'react'

import axios from 'axios'

class CovidState extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:8000/api/?iscounty=0')
      .then(response => {
        
        //this.setState({username: response}) 
      })
  }

  render () {
    return (
        <button className='button' onClick={this.handleClick}>Covid Cases</button>
    )
  }
}
export default CovidState