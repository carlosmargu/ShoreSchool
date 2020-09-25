import React, { Component } from 'react';
import './ContactUsComponent.css';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <section className="contact">
                    <div className="content">
                        <h2>Contáctanos</h2>
                        <p>Si deseas información sobre los procesos de matricula del colegio, no dudes en llenar el formulario.</p>
                    </div>
                    <div className="containerflex">
                        <div className="contactInfo">
                            <div className="box">
                                <div className="icon" style={{color:"#000"}}>
                                    <div className="text" style={{color: "#000"}}>
                                        <h3>Dirección <i className="fa fa-map-marker fa-1.5x" aria-hidden="true"></i></h3>
                                        <p>Calle 12 #233-34A <br></br> Funza - Cundinamarca</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon" style={{color:"#000"}}>
                                        <div className="text" style={{color: "#000"}}>
                                            <h3>Telefono <i className="fa fa-phone fa-1.5x" aria-hidden="true"></i></h3>
                                            <p>822564372</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon" style={{color: "#000"}}>
                                        <div className="text" style={{color: "#000"}}>
                                            <h3>Email <i className="fa fa-envelope-o fa-1.5x" aria-hidden="true"></i></h3>
                                            <p>colegio@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm">
                            <form onSubmit={()=>alert("Tu mensaje ha sido enviado, nos comunicaremos lo más pronto contigo")}>
                                <h2>Envia un mensaje</h2>
                                <div className="inputBox">
                                    <input type="text" name="" required="required" style={{"background-color":"#76B8F0"}}/>
                                    <span>Nombre Completo</span>
                                </div>
                                <div className="inputBox">
                                    <input type="text" name="" required="required" style={{"background-color":"#76B8F0"}}/>
                                    <span>Email</span>
                                </div>
                                <div className="inputBox">
                                    <textarea required="required" style={{"background-color":"#76B8F0"}}></textarea>
                                    <span>Escribe tu mensaje...</span>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Enviar"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}
export default ContactUs;
