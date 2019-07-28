const PIZZA_URL = "http://localhost:3000/pizzas"

const getData = () => {
  return fetch(PIZZA_URL)
  .then(res => res.json())
}

const addPizzaToBackEnd = (selectedPizza) => {
  return fetch(`${PIZZA_URL}/${selectedPizza.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(selectedPizza)
  })
  .then(res => res.json())
}

export default {
  getData,
  addPizzaToBackEnd
}