import React, { Component } from 'react'

import axios from 'axios'
import globalVar from './globals'

class CovidState extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    globalVar.app_state = "case"
    globalVar.clear_state()
    axios.get(`http://localhost:8000/api/casedata/?iscounty=0`).then(cases => {
      axios.get('http://localhost:8000/api/states/').then(states => {
          var output = []
          var country_data = []

          states.data.forEach((state) => {
              cases.data.forEach((caseData) => {
                  if (state.stateid === caseData.stateid){
                      var modifier = 0
                      if (caseData.casesconfirmed > 200000){
                          modifier = 100000
                      }else if (caseData.casesconfirmed > 100000){
                          modifier = 50000
                      }else {
                          modifier = 10000
                      }
                      output.push({lat: state.latitude, lng: state.longitude, weight: caseData.casesconfirmed/modifier})
                      country_data.push({casesconfirmed: caseData.casesconfirmed, casesprobable: caseData.casesprobable, deathsconfirmed: caseData.deathsconfirmed, deathsprobable: caseData.deathsprobable})
                  }
              })
          })
          globalVar.update_stats({})

          var totalcases = 0
          var casesprobable = 0
          var totaldeaths = 0
          var deathsprobable = 0

          country_data.forEach((data)=> {
              totalcases += data.casesconfirmed
              casesprobable += data.casesprobable
              totaldeaths += data.deathsconfirmed
              deathsprobable += data.deathsprobable
          })

          globalVar.update_stats({title: "U.S Covid Cases", "Total Cases": totalcases.toLocaleString(), "Cases Probable": casesprobable.toLocaleString(), "Total Deaths": totaldeaths.toLocaleString(), "Deaths Probable": deathsprobable.toLocaleString()})

          var data = {
              positions: output,
              options: {   
                  radius: 60,   
                  opacity: 0.6,
              }
          }
          globalVar.updateHeatMap(data)
      })
    })

    globalVar.backToCenter({
      center: {
        lat: 39,
        lng: -97
      },
      zoom: 4,
    })
  }

  render () {
    return (
        <button className='button' onClick={this.handleClick}>Covid Cases</button>
    )
  }
}
export default CovidState