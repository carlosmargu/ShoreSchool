import React, {Component} from 'react';
import {Button, Jumbotron } from 'reactstrap';
import './HomeComponent.css'
import { Link } from 'react-router-dom';
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
                        <h1>Colegio Sabana</h1>
                        <p>Bienvenido al portal del Colegio Sabana</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                    </div>
                    <div class="col-sm-2.5">
                        <img className="profile-photo" src={this.props.userData.imageUrl}/>
                    </div>
                    <div class="col-sm-3">
                        <h1 className="profile-user">Estudiante</h1>
                        <h2 className="profile-user">Nombre: {this.props.userData.nombre} </h2>
                        <h4 className="">Grado: {this.props.userData.grado}</h4>
                        <h4 className="">Genero: {this.props.userData.genero}</h4>
                    </div>
                    <div class="col-sm">
                    <div class="row">
                            <div class="col-sm col2">
                                <h1 className="profile-user">Estudiante</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-2">
                                {this.state.tareas.map(tarea =>
                                    <> 
                                        <h5 className=""><span className="badge badge-secondary">{tarea.dia}</span></h5>
                                        <h6>{tarea.mes}</h6>
                                    </>
                                    )}
                            </div>
                            <div class="col-sm">
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
                <div class="row">
                    <div class="col-sm-5">
                    </div>
                    <div class="col-sm-3">
                        <br></br>
                        <Link className="link" to="/semanas"><button type="button" className="btn btn-primary btnhome">SEMANAS</button></Link>
                    </div>
                    <div class="col-sm-3">
                    <br></br>
                        <Link className="link" to="/entregas"><button type="button" className="btn btn-primary btnhome">ENTREGAS</button></Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                    </div>
                    <div class="col-sm-3">
                    <br></br>
                        <Link className="link" to="/contacto"><button type="button" className="btn btn-primary btnhome">CONTACTO</button></Link>
                    </div>
                    <div class="col-sm-3">
                    <br></br>
                        <Link className="link" to="/comunicados"><button type="button" className="btn btn-primary btnhome">COMUNICADOS</button></Link>
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
