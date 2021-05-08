import Menu from './MenuComponent';
import SelectDish from './selectedDishComponent';
import {Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
class Main extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId)
  {
      
    this.setState({selectedDish:dishId});
      
  }
  
  render()
  { console.log("filter result"+JSON.stringify(this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)));
    return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu  dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      <SelectDish info={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
    </div>
  );
}
}
export default Main;
