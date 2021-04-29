import React, { Component } from 'react'
import Select from 'react-select'
// import axios from 'axios'

class SelectCounty extends Component {
    constructor () {
        super()
        this.state = {
            selectOptions: [],
            selected: "",
        }
    }

    // async getOptions(props){
    //     console.log(props)
    //     const res = await axios.get('http://localhost:8000/api/counties/')
    //     console.log(res)
    //     const data = res.data
    
    //     const options = data.map(d => ({
    //       "value" : d.countyname,
    //       "label" : d.countyname
    //     }))
    //     console.log(options)
    //     this.setState({selectOptions: options})
    //   }

    handleChange (event) {
        // this.setState({selected: event.value})
        //console.log(event.value)
      }

    render () {
        console.log(this.props)
        const options = this.props.data.map(d => ({
            "value" : d.countyname,
            "label" : d.countyname
          }))

        return (
            <div>
                <Select onChange={this.handleChange()} options={options} />
            </div>
        )
    }

    // componentDidMount(){
    //     console.log(this.props)
    //     this.getOptions()
    // }
}

export default SelectCounty