import React, { Component } from 'react';
import './AboutUsComponent.css';

class AboutUs extends Component {
    render() {
        return (
        <div>
          <div id="services" className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Colegio Sabana</h2>
                        <p className="p-heading p-large">Somos una institución educativa que formamos líderes desde el año 2000</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <img className="card-image" src="https://i.ibb.co/7VZcnv2/services-icon-2.png" alt="alternative"/>
                            <div className="card-body">
                                <h4 className="card-title">Oportunidad de crecer</h4>
                                <p>Fomentamos la adquisición de un amplio conocimiento</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-image" src="https://i.ibb.co/BN3LJ84/services-icon-3.png" alt="alternative"/>
                            <div className="card-body">
                                <h4 className="card-title">Atención Integral</h4>
                                <p>Conocedores de los diferentes tipos y estilos de aprendizaje</p>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-image" src="https://i.ibb.co/Wzc480x/services-icon-1.png" alt="alternative"/>
                            <div className="card-body">
                                <h4 className="card-title">Actividades en equipo</h4>
                                <p>Promovemos el desarrollo de habilidades comunicativas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>Misión</h2>
                            <p>Somos un colegio que ofrece a la sociedad una propuesta educativa que tiene como objetivo la formación  integral del alumno (personal, social y transcendente) y una adecuada formación académica desde Infantil hasta Bachillerato,  desde la corresponsabilidad del Equipo Educativo y con la colaboración de sus familias.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://i.ibb.co/R6x81T4/details-2-office-team-work.png" alt="alternative"/>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="https://i.ibb.co/34NrZJN/details-1-office-worker.png" alt="alternative"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>Visión</h2>
                            <p>En el año 2021 seremos un Colegio que forma y acompaña para la excelencia humana, desde su propuesta educativa orientada a la formación integral en la construcción de una sociedad justa y en paz, a través del compromiso social y ambiental</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        );}
}
export default AboutUs;
