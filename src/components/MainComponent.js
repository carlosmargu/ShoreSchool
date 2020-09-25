import React, { Component } from 'react';
import Home from './Home/HomeComponent';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';
import ContactUs from './Contacto/ContactUsComponent';
import Inicio from './Inicio/InicioComponent';
import AboutUs from './Acerca/AboutUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged:false,
      username:'',
      imageUrl:'',
      pdf:''
    }
  }
  componentDidMount (){
    console.log("Hola" + this.state.isLogged)
  }

  login = (username,imageUrl,pdf)=>{
    this.setState({isLogged:true,username,imageUrl,pdf})

  }

  logout = ()=>{
    this.setState({isLogged:false,username:'',imageUrl:'',pdf:''})
  }

  render() {
   return (

     <div>
      {this.state.isLogged ?<Redirect to="/index" /> : <Redirect to="/inicio" />}

       <Header handleLogin={this.login} handleLogout={this.logout} isLogged={this.state.isLogged}/>
       <Switch location={this.props.location}>
         <Route path='/index' component={() => <Home username={this.state.username} imageUrl={this.state.imageUrl} pdf={this.state.pdf}/>} />
         <Route path='/contacto' component={() => <ContactUs />} />
         <Route path='/inicio' component={() => <Inicio />} />
         <Route path='/acerca' component={() => <AboutUs />} />
       </Switch>
       <Footer />
     </div>
   );
 }
}

export default Main;
