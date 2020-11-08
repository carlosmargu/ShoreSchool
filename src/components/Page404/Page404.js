import React, { Component } from 'react';
import './Page404.css';
import { Link } from 'react-router-dom';

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
						<Link className="go-back" to="/contacto"><button type="button" className="btn btn-primary btn404">Nos quieres contactar?</button></Link>
		            </div>   
	            </div>   
            </div>
        );
    }
        }

export default Page404;