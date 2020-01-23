import React from 'react';
import './App.css';
import property from './data/generated-property.json'
import customers from './data/generated-customers.json'

function App() {

  return (
    <div className="App">
      <h1> New house available  </h1>
      <h2> Here is the characteristics of the house </h2>
        <li> Type : {property.type} </li>
        <li> Rooms : {property.rooms} </li>
        <li> Surface : {property.surface} m2 </li>
        <li> Price : {property.price} € </li>
        <li> Cave :  {property.cave ? "Yes" : "No"} </li>
        <li> Surface of the garden {property.garden} m2 </li>
      <h2> Potential customers that can be interested </h2>
      {customers.map(customer => <li>{customer.search.budget >= property.price
        && customer.search.room == property.room ? customer.firstName + ' ' +
         customer.lastName + " might be interested because it's in his buget which is "  + customer.search.budget +  "€ & the house has enough room" : "No" } </li>)}
    </div>
  );
}

export default App;
