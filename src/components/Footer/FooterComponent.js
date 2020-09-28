import React from 'react';
import { Link } from 'react-router-dom';
import './FooterComponent.css';

function Footer(props) {
    return(
    <div className="footer textwhite">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    {props.isLogged?(<>
                        <Link to='/home'><li className="color">Inicio</li></Link>
                        <Link to='/acerca'><li className="color">Semanas</li></Link>
                        <Link to='/menu'><li className="color">Actividades Entregadas</li></Link>
                        <Link to='/contacto'><li className="color">Contacto</li></Link>
                        <Link to='/tools'><li className="color">Herramientas</li></Link>
                        <Link to='/comunicados'><li className="color">Comunicados</li></Link>
                    </>) : (<>
                        <Link to='/inicio'> <li className="color">Inicio</li></Link>
                        <Link to='/contacto'><li className="color">Contacto</li></Link>
                        <Link to='/acerca'><li className="color">Sobre Nosotros</li></Link>
                    </>)}

                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Colegio Sabana</h5>
                    <address>
		              FUNZA CUNDINAMARCA<br />
		              Colegio Sabana<br />

		              <i className="fa fa-phone fa-lg"></i>: +57 1111111<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="carlosmargu@unisabana.edu.co">
                         colegiosabana@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                  <div className="social-bar">
                       <a href="" className="icon icon-facebook" target="_blank"></a>
                       <a href="" className="icon icon-twitter" target="_blank"></a>
                       <a href="" className="icon icon-youtube" target="_blank"></a>
                       <a href="" className="icon icon-instagram" target="_blank"></a>
                   </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© ShoreSchools </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
