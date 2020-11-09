import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import firebase from '../../instances/firebase'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions'
import * as errorTypes from '../../staticValues/firebaseErrors'
import './HeaderComponent.css';
import {ReactComponent as SpinnerInfinity} from '../../assets/spinner/spinner-infinity.svg'

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
       this.props.cleanErrors();
     }

     handleLogin(event) {
        event.preventDefault();
        //this.toggleModal();
        const usuario = this.username.value;
        const password = this.password.value;
        this.props.onUserLogin(usuario, password);
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

  static getDerivedStateFromProps(props, state) {
    if (props.isUserLoggedIn){
      return {
        isModalOpen: false,
      }
    } else return {}
  }

  emailHasErrors = () => {
    let emailsErrors = [errorTypes.INVALID_EMAIL, errorTypes.EMAIL_NOT_FOUND]
    return emailsErrors.includes(this.props.handlingError)
  }

  passwordHasErrors = () => {
      let passwordErrors = [errorTypes.INVALID_PASSWORD]
      return passwordErrors.includes(this.props.handlingError)
  }

  renderEmailError = () => {
    switch (this.props.handlingError){
        case errorTypes.INVALID_EMAIL:
            return (<p className='login--form--error-text'>Por favor, ingrese un correo válido</p>);
        case errorTypes.EMAIL_NOT_FOUND:
            return (<p className='login--form--error-text'>La cuenta ingresada no existe</p>);
        default: return;
    }
  }

  renderPasswordError = () => {
      switch (this.props.handlingError){
          case errorTypes.INVALID_PASSWORD:
              return (<p className='login--form--error-text'>Contraseña incorrecta</p>);
          default: return;
      }
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
                    {this.props.isUserLoggedIn? (   <>
                      <NavItem>
                        <NavLink className="nav-link" to='/'>Inicio</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/semanas'>Semanas</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link"  to='/entregas'> Subir Actividades</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className="nav-link" to='/contacto'> Contacto</NavLink>
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
                            <Button color={this.props.isUserLoggedIn?"danger":"success"} onClick={this.props.isUserLoggedIn ? this.props.onUserLogout : this.toggleModal}>{this.props.isUserLoggedIn ? "Logout" : "Login"}</Button>
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
                            innerRef={(input) => this.username = input}
                            onChange={this.props.cleanErrors} />
                    </FormGroup>
                    {this.renderEmailError()}
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}
                            onChange={this.props.cleanErrors}  />
                    </FormGroup>
                    {this.renderPasswordError()}
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input) => this.remember = input}  />
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary" onClick={this.handleLogin}>Login</Button>
                    {this.props.loadingAuth ? (<SpinnerInfinity height="96px"/>): ''}
                  </Form>
              </ModalBody>
          </Modal>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      loadingAuth: state.authenticationStore.loadingAuth,
      handlingError: state.authenticationStore.handlingError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onUserLogin: (username, password, onSuccessCallback) => dispatch(actionCreators.logIn(username, password, onSuccessCallback)),
      onUserLogout: () => dispatch(actionCreators.logOut()),
      cleanErrors: () => dispatch(actionCreators.cleanErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);