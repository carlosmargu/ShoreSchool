import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ContactUs from './ContactUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {isLogged:false}
  }
  componentDidMount (){
    console.log("Hola" + this.state.isLogged)
  }

  login = (username,imageUrl)=>{
    this.setState({isLogged:true,username,imageUrl})

  }

  render() {
   return (

     <div>
      {this.state.isLogged ?<Redirect to="/index" /> : ""}

       <Header handleLogin={this.login} isLogged={this.state.isLogged}/>
       <Switch location={this.props.location}>

         <Route path='/index' component={() => <Home username={this.state.username} imageUrl={this.state.imageUrl}/>} />
         <Route path='/contacto' component={() => <ContactUs />} />
         {/*<Route exact path="/inicio">   {isLogged ? <Redirect to="/dashboard" /> : <PublicHomePage />} </Route>*/}
       </Switch>
       <Footer />
     </div>
   );
 }
}

export default Main;
