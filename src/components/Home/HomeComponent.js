import React, {Component} from 'react';
import {Button, Jumbotron } from 'reactstrap';
import './HomeComponent.css'
import axios from 'axios'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas:[]
        }
    }
    
    componentDidMount() {
        axios.get(`https://api.npoint.io/4529b70a8255f93d8392`, {})
            .then(res => {
                  this.setState({tareas:res.data})
            })
             .catch((error) => {
                    console.log(error)
            })
    }

render() {
    return(
        <>
         <div className="fondo">
            <div class="container">
                <div class="row">
                    <div class="col-sm col1">
                    One of three columns
                    </div>
                    <div class="col-sm">
                    One of three columns
                    </div>
                    <div class="col-sm">
                    One of three columns
                    </div>
                </div>
            </div>
        </div>
        <div className="fondo">
        <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Colegio Sabana</h1>
                        <p>Bienvenido al portal del Colegio Sabana</p>
                    </div>
                </div>
            </div>
        <div className="home-container container">
            <div  className="container col-lg-8 profile-data col-sm-12">
                <div className="row align-items-start">
                    <img className="profile-photo" src={this.props.userData.imageUrl}/>
                    <div className="col-1 col-md m-1">
                        <h1 className="profile-user">{this.props.userData.nombre} </h1>
                        <h4 className="">{this.props.userData.grado}</h4>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-sm-12 calendar-data align-items-end">
                <div className="row row-striped">
                    <div className="col-2 text-right">
                        {this.state.tareas.map(tarea =>
                            <> 
                                <h5 className=""><span className="badge badge-secondary">{tarea.dia}</span></h5>
                                <h6>{tarea.mes}</h6>
                            </>
                            )}
                    </div>
                    <div className="col-8">
                        {this.state.tareas.map(tarea =>
                        <>
                            <h3 className="text-uppercase"><strong>{tarea.titulo}</strong></h3>
                            <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i>{` ${tarea.dia}-${tarea.mes}-${tarea.año}`}</li>
                            <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> {tarea.hora}</li>
                            <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> {tarea.salon}</li>
                            </ul>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </div>
      </>
    );
}
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        userData: state.authenticationStore.userData,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        //onUserLogin: (username, password, onSuccessCallback) => dispatch(actionCreators.logIn(username, password, onSuccessCallback)),
        //cleanErrors: () => dispatch(actionCreators.cleanErrors())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
