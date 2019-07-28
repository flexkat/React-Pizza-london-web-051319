import React from "react"

const Pizza = ({pizza, setSelectedPizza}) => {
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Vegetarian" : "Not Vegetarian" }</td>
      <td><button type="button" className="btn btn-primary" onClick={() => setSelectedPizza(pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
