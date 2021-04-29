import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

import SelectCounty from './SelectCounty'

class SelectState extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectOptions: [],
            selected: "",
            counties: []
        }
    }

    async getOptions(){
        const res = await axios.get('http://localhost:8000/api/states/')
        console.log(res)
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.abrv,
          "label" : d.statename
        }))
        this.setState({selectOptions: options})
      }

    handleChange (event) {
        axios.get(`http://localhost:8000/api/counties/?state=${event.value}`).then(response => {
            this.setState({selected: event.value, counties: response.data})
        })
      }

    render () {
        return (
            <div>
                <Select onChange={this.handleChange.bind(this)} options={this.state.selectOptions} />
                <SelectCounty data={this.state.counties} />
            </div>
        )
    }

    componentDidMount(){
        this.getOptions()
    }
}

export default SelectState