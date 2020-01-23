import react, { Component } from 'react'
import data from "./data/generated-property"

const property = data

class Property extends Component {
  render () {
    <ul>
        {property.map(s => (<li> {s} </li>))}
    </ul>
  }
}

export default Property
