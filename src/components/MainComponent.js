import React, { Component } from 'react';
import Home from './Home/HomeComponent';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import ContactUs from './Contacto/ContactUsComponent';
import Inicio from './Inicio/InicioComponent';
import AboutUs from './Acerca/AboutUsComponent';
import Comunicados from './Comunicados/Comunicados.js'
import Semanas from './Semanas/Semanas.js'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

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

  login = (username,imageUrl,pdf, nombre, grado)=>{
    this.setState({isLogged:true,username,imageUrl,pdf, nombre, grado})

  }

  logout = ()=>{
    this.setState({isLogged:false,username:'',imageUrl:'',pdf:'', nombre:'', grado:''})
  }

  render() {
   return (

     <div>
      {this.state.isLogged ?<Redirect to="/index" /> : <Redirect to="/inicio" />}

       <Header handleLogin={this.login} handleLogout={this.logout} isLogged={this.state.isLogged}/>
       <Switch location={this.props.location}>
         <Route path='/index' component={() => <Home username={this.state.username} imageUrl={this.state.imageUrl} pdf={this.state.pdf} nombre={this.state.nombre} grado={this.state.grado}/>} />
         <Route path='/contacto' component={() => <ContactUs />} />
         <Route path='/inicio' component={() => <Inicio />} />
         <Route path='/acerca' component={() => <AboutUs />} />
         <Route path='/comunicados' component={() => <Comunicados />} />
         <Route path='/semanas' component={() => <Semanas />} />
       </Switch>
       <Footer isLogged={this.state.isLogged}/>
     </div>
   );
 }
}

export default Main;
