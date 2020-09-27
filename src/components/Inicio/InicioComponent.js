import React, { Component } from 'react';
import './InicioComponent.css';
import './header-teamwork.svg';
import { Link } from 'react-router-dom';

class Inicio extends Component {
render(){
  return (
    <div id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1> Bienvenido al Colegio Sabana</h1>
                            <p className="p-large">Portal web del Colegio Sabana en el cual podra encontar actividades personalizadas
                                                   para el estudiante y noticias relevantes para la comunidad estudiantil</p>
                            <Link className="btn-solid-lg page-scroll" to="/acerca">CONÓCENOS</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://i.ibb.co/TRVwV7j/header-teamwork.png" alt="alternative"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );}
}
export default Inicio
