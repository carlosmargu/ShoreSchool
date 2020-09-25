import React from 'react';
import {Jumbotron } from 'reactstrap';
import './HomeComponent.css'

function Home(props) {
    return(
      <div>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Colegio en Linea</h1>
                        <h2>Nooo </h2>
                        <p>Bienvenido al portal del Colegio Sabana para los alumnos de transicion</p>
                    </div>
                </div>
            </div>
        </Jumbotron>
        <div className="container">
            <div className="row align-items-start">
                <img className="profile-photo" src={props.imageUrl}/>
                <div className="col-1 col-md m-1">
                
                <h1 className="profile-user">{props.username} <a href="http://www.google.com" class="material-icons floating-btn">attach_file</a></h1>
                
                </div>
                
            </div>
        </div>
      </div>
    );
}

export default Home;
