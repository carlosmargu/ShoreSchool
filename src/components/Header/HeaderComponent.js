import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './HeaderComponent.css';

class Header extends Component {

  constructor(props) {
       super(props);

       this.toggleNav = this.toggleNav.bind(this);
       this.state = {
         isNavOpen: false,
         isModalOpen: false,
         userItems: [],
       };
       this.toggleModal = this.toggleModal.bind(this);
       this.toggleNav = this.toggleNav.bind(this);
       this.handleLogin = this.handleLogin.bind(this);
     }

     toggleNav() {
       this.setState({
         isNavOpen: !this.state.isNavOpen
       });
     }

     toggleModal() {
       this.setState({
         isModalOpen: !this.state.isModalOpen
       });
     }

     handleLogin(event) {
      event.preventDefault();
        this.toggleModal();
        const usuario = this.username.value;
        const password = this.password.value;
        const usuario1=this.state.userItems.filter(usu=>usuario===usu.user);
          if(usuario1.length > 0){
            if(usuario1[0].pass===password){
              const imageUrl = usuario1[0].img
              const pdf = usuario1[0].pdf
              const nombre = usuario1[0].nombre
              const grado = usuario1[0].grado
              console.log("Usuario y contraseña correcto")
              this.props.handleLogin(usuario,imageUrl,pdf,nombre,grado);

              //this.props.history.go('/index');
            }else{
              console.log("Contraseña incorrectos")
            }
            }else{
              console.log("Usuario no existe")
            }
          }


    getData (){
       axios.get(`https://api.npoint.io/e78e776fe063d5c9af41`, {})
           .then(res => {
                 this.setState({userItems:res.data})
               })
            .catch((error) => {
                   console.log(error)
               })
           }
   componentDidMount() {
      this.getData()
      }
  render() {
    return(

      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="#"></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>

                    <Nav navbar>
                    {this.props.isLogged? (   <>
                      <NavItem>
                        <NavLink className="nav-link" to='/index'>Inicio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/semanas'>Semanas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/menu'> Actividades Entregadas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/contacto'> Contacto</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/tools'> Herramientas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/comunicados'> Comunicados</NavLink>
                      </NavItem>
                      </>
                      ) : (<>
                      <NavItem>
                        <NavLink className="nav-link"  to='/inicio'> Inicio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/contacto'> Contacto</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/acerca'> Sobre nosotros</NavLink>
                      </NavItem>
                      </>)}

                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button color={this.props.isLogged?"danger":"success"} onClick={this.props.isLogged ? this.props.handleLogout : this.toggleModal}>{this.props.isLogged ? "Logout" : "Login"}</Button>
                        </NavItem>
                    </Nav>
                  </Collapse>
              </div>
            </Navbar>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
              <ModalBody>
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input) => this.remember = input}  />
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary" onClick={this.handleLogin}>Login</Button>
                  </Form>
              </ModalBody>
          </Modal>
        </React.Fragment>
    );
  }
}

export default Header;
