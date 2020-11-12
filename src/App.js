import './App.css';
import Menu from './Components/MenuComponent';
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">Boostrap In Reactjs snippets </NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
