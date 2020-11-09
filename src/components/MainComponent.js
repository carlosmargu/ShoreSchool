import React, { Component } from 'react';
import Home from './Home/HomeComponent';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import ContactUs from './Contacto/ContactUsComponent';
import Inicio from './Inicio/InicioComponent';
import AboutUs from './Acerca/AboutUsComponent';
import Comunicados from './Comunicados/Comunicados.js'
import Semanas from './Semanas/Semanas.js'
import Page404 from './Page404/Page404.js'

//import Entregas from './Entregas/EntregasComponent.js'
import Entregas from './Entregas/EntregaPage.js'
import EntregaIndividual from './Entregas/EntregasComponent.js'
import { Switch, Route, Redirect, withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged:false,
      username:'',
      imageUrl:'',
      pdf:'',
      nombre:'',
      grado:''
    }
  }

  loggedInPages = [
    '/semanas',
    '/entregas',
    '/entregas/:id',
    '/comunicados',
    '/',
  ]

  loggedOutPages = [
    '/inicio',
    '/acerca',
  ]

  checkLogin(){
    if (this.props.firebaseInited){
      console.log({loooooooo:this.props.location})
      let location = this.props.location.pathname;
      if (this.props.isUserLoggedIn){
        for (let page of this.loggedOutPages){
          if (matchPath(location, {path: page, exact: true})){
            this.props.history.push('/')
            return
          }
        }
      } else {
        for (let page of this.loggedInPages){
          if (matchPath(location, {path: page, exact: true})){
            this.props.history.push('/inicio')
            return
          }
        }
      }
    }
  }

  componentDidMount(){
    this.checkLogin();
  }

  componentDidUpdate(){
    this.checkLogin();
  }

  login = (username,imageUrl,pdf, nombre, grado)=>{
    this.setState({isLogged:true,username,imageUrl,pdf, nombre, grado})

  }

  logout = ()=>{
    this.setState({isLogged:false,username:'',imageUrl:'',pdf:'', nombre:'', grado:''})
  }

  render() {
   return (

     <div>
       <Header handleLogin={this.login} handleLogout={this.logout} isLogged={this.state.isLogged}/>
       <Switch location={this.props.location}>
         <Route exact path='/' component={() => <Home username={this.state.username} imageUrl={this.state.imageUrl} pdf={this.state.pdf} nombre={this.state.nombre} grado={this.state.grado}/>} />
         <Route exact path='/contacto' component={ContactUs} />
         <Route exact path='/inicio' component={() => <Inicio />} />
         <Route exact path='/acerca' component={() => <AboutUs />} />
         <Route exact path='/comunicados' component={() => <Comunicados />} />
         <Route exact path='/semanas' component={() => <Semanas />} />
         <Route exact path='/entregas/:id' component={(props) => <EntregaIndividual {...props}/>} />
         <Route exact path='/entregas' component={() => <Entregas />} />
         <Route component={() => <Page404 />} />
       </Switch>
       <Footer isLogged={this.state.isLogged}/>
     </div>
   );
 }
}

const mapStateToProps = state => {
  return {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      userLoggedIn: state.authenticationStore.UserLoggedIn,
      loadingAuth: state.authenticationStore.loadingAuth,
      handlingError: state.authenticationStore.handlingError,
      firebaseInited: state.authenticationStore.firebaseInited,
  }
}

const mapDispatchToProps = dispatch => {
  return {/*
      onUserLogin: (username, password, onSuccessCallback) => dispatch(actionCreators.logIn(username, password, onSuccessCallback)),
      cleanErrors: () => dispatch(actionCreators.cleanErrors())
  */}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));