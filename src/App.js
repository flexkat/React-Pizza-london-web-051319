import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import API from './adapters/API'

class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: ""
  }

  componentWillMount() {
    API.getData()
    .then(pizzas => this.setState({ pizzas }))
  }

  setSelectedPizza = (selectedPizza) => {
    this.setState({
      selectedPizza
    })
  }

  changeSelectedPizzaValues = (key, value) => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [key]: value
      }
    })
  }

  editPizza = () => {
    API.addPizzaToBackEnd(this.state.selectedPizza)
    .then(updatedPizza => {
      const newArray = this.state.pizzas.map(p => {
        if (p.id !== updatedPizza.id) return p;
  
        return updatedPizza;
      })
  
      this.setState({
        pizzas: newArray
      })
    })

    
  }

  render() {
    return (
      <Fragment>
        <Header/>
        {this.state.selectedPizza !== "" ? <PizzaForm pizza={this.state.selectedPizza} changeSelectedPizzaValues={this.changeSelectedPizzaValues} editPizza={this.editPizza}/> : <div/>}
        
        <PizzaList pizzas={this.state.pizzas} setSelectedPizza={this.setSelectedPizza}/>
      </Fragment>
    );
  }
}

export default App;
