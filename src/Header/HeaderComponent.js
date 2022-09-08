import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalBody, ModalHeader, FormGroup, Label, Input, Form } from 'reactstrap';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Navbar expend="md" className="nav-bar-line">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            {/* <NavbarBrand className='mr-auto' href="/">
              <img src='assets/images/logo.png' height="30" width="41" alt='Restorante con fusion' />
            </NavbarBrand> */}
            <Collapse isOpen={this.state.isNavOpen} >
              <Nav navbar >
                <NavItem>
                  <Link to='/home' className='link-item'> <span className='fa fa-home fa-lg link-box'></span>Home</Link>
                </NavItem>

                <NavItem>
                  <Link to='/aboutus' className='link-item'> <span className='fa fa-info fa-lg link-box'></span>About Us</Link>
                </NavItem>

                <NavItem>
                  <Link to='/menu' className='link-item'> <span className='ffa fa-list fa-lg link-box'></span>Menu</Link>
                </NavItem>

                <NavItem>
                  <Link to='/contactus' className='link-item'> <span className='fa fa-address-card  fa-lg link-box'></span>Contacts</Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal} className="log-button1">
                    <span className='fa fa-sign-in fa-lg '></span>Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="jumbotron " >
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.isModalOpen} toogle={this.toggleModal}>
          <ModalHeader toogle={this.toggleModal}>Header</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" className="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;