import React from 'react';
import {Button, Jumbotron } from 'reactstrap';
import './HomeComponent.css'

function Home(props) {
    return(
      <div className="home-container">
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
        <div className="profile-data" className="container">
            <div className="row align-items-start">
                <img className="profile-photo" src={props.imageUrl}/>
                <div className="col-1 col-md m-1">
                <h1 className="profile-user">{props.username} <a href={props.pdf} className="material-icons floating-btn">attach_file</a></h1>       
                </div>
            </div>
        </div>
        <div className="calendar-data">
            <div className="row row-striped">
                <div className="col-2 text-right">
                    <h1 className="display-4"><span className="badge badge-secondary">23</span></h1>
                    <h2>OCT</h2>
                </div>
                <div className="col-10">
                    <h3 className="text-uppercase"><strong>Ice Cream Social</strong></h3>
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Monday</li>
                        <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 12:30 PM - 2:00 PM</li>
                        <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Cafe</li>
                    </ul>
                    <p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="row row-striped">
                <div className="col-2 text-right">
                    <h1 className="display-4"><span className="badge badge-secondary">27</span></h1>
                    <h2>OCT</h2>
                </div>
                <div className="col-10">
                    <h3 className="text-uppercase"><strong>Operations Meeting</strong></h3>
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-calendar-o" aria-hidden="true"></i> Friday</li>
                        <li className="list-inline-item"><i className="fa fa-clock-o" aria-hidden="true"></i> 2:30 PM - 4:00 PM</li>
                        <li className="list-inline-item"><i className="fa fa-location-arrow" aria-hidden="true"></i> Room 4019</li>
                    </ul>
                    <p>Lorem ipsum dolsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Home;
