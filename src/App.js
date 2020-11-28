import './App.css';
import Menu from './Components/MenuComponent';
import {Form, Navbar, NavbarBrand} from 'reactstrap';
import React,{Component} from 'react'; 
import {DISHES,} from "./shared/dishes";

class App extends Component {

constructor(props){
  super(props);
  this.state={
    dishes:DISHES
  };
}
render(){
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Boostrap In Reactjs snippets </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
}}

export default App;
