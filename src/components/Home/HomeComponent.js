import React from 'react';
import {Button, Jumbotron } from 'reactstrap';
import './HomeComponent.css'

function Home(props) {
    return(
        <>
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
      <div className="home-container container">
        
        <div  className="container profile-data">
            <div className="row align-items-start">
                <img className="profile-photo" src={props.imageUrl}/>
                <div className="col-1 col-md m-1">
                <h1 className="profile-user">{props.username} <a href={props.pdf} className="material-icons floating-btn">attach_file</a></h1>       
                <h4 className="">Grado 503</h4>
                </div>
            </div>
        </div>
        <div className="calendar-data">
            <div className="row row-striped">
                <div className="col-2 text-right">
                    <h5 className=""><span className="badge badge-secondary">27</span></h5>
                    <h6>OCT</h6>
                </div>
                <div className="col-10">
                    <h5 className="text-uppercase"><strong>Operations Meeting</strong></h5>
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Friday</li>
                        <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 2:30 PM - 4:00 PM</li>
                        <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Room 4019</li>
                    </ul>
                </div>
            </div>
            
        </div>
      </div>
      </>
    );
}

export default Home;
