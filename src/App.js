import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Component } from 'react';
import Menu from './components/MenuComponent';


class  App extends  Component {
  render(){
    return (
   <div>
    <Navbar dark color="primary">
      <div className='container'>
        <NavbarBrand href='/ '>Ristorante Con fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu />
   </div>
      );
  }
    

  
 
}

export default App;
