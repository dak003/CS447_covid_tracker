import React, { Component } from 'react'

import axios from 'axios'

class Informational extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    var url = "https://www.vaccines.gov/search/"
    window.open(url, '_blank').focus();
  }

  render () {
    return (
        <button className='button' style={{height: "35px"}} onClick={this.handleClick} >Find Closest Vaccination</button>
    )
  }
}
export default Informational