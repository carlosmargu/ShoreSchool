import React, { Component } from 'react';
import './Page404.css';

class Page404 extends Component {
    render() {
        return (
            <div className="kode-content">
	            <div className="container">
		            <div className="error-404">
			            <h2>Uppppss!!!</h2>
			            <div className="page-404">
				            <p>404</p>
				            <span>La página no se puede encontrar</span>
			            </div>
			            <p>No podemos encontrar la página que buscabas. Por favor revisa la URL que estas ingresando.</p>
			            <a href="#" className="go-back">Regresar a la página de Inicio</a>
		            </div>   
	            </div>   
            </div>
        );
    }
        }

export default Page404;