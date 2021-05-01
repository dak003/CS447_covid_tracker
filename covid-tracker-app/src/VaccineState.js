import React, { Component } from 'react'

import axios from 'axios'
import globalVar from './globals'

class VaccineState extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    globalVar.app_state = "vaccine"
    globalVar.clear_state()
    axios.get(`http://localhost:8000/api/vacdata`).then(vacs => {
            axios.get('http://localhost:8000/api/states/').then(states => {
                var output = []
                var country_data = []
                states.data.forEach((state) => {
                    vacs.data.forEach((vacData) => {
                        if (state.stateid === vacData.stateid){
                            var modifier = 0
                            if (vacData.numberfullyvac > 1000000){
                                modifier = 1000000
                            }else if (vacData.numberfullyvac > 500000){
                                modifier = 500000
                            }else {
                                modifier = 100000
                            }
                            output.push({lat: state.latitude, lng: state.longitude, weight: vacData.numberfullyvac/modifier})
                            country_data.push({vacdelivered: vacData.vacdelivered, vacadministered: vacData.vacadministered, numberanydose: vacData.numberanydose, numberfullyvac: vacData.numberfullyvac})
                        }
                    })
                })

                globalVar.update_stats({})
                var delivered = 0
                var administered = 0
                var anydose = 0
                var fullyvaccinated = 0

                country_data.forEach((data)=> {
                  delivered += data.vacdelivered
                  administered += data.vacadministered
                  anydose += data.numberanydose
                  fullyvaccinated += data.numberfullyvac
                })

                globalVar.update_stats({title: "U.S Vaccination Data", "Vaccines Delivered": delivered.toLocaleString(), "Vaccines Administered": administered.toLocaleString(), "Received First Dose": anydose.toLocaleString(), "Fully Vaccinated": fullyvaccinated.toLocaleString()})

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
        <button className='button' onClick={this.handleClick}>Vaccinations</button>
    )
  }
}
export default VaccineState