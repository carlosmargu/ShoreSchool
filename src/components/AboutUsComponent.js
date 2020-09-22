import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <body>
                <section className="contact">
                    <div className="content">
                        <h2>Sobre Nosotros</h2>
                        <p>loremipsum dolor sit amet, consectetur adipis</p>
                    </div>
                    <div className="container">
                        <div className="contactInfo">
                            <div className="box">
                                <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <div className="text"> 
                                        <h3>Dirección</h3>
                                        <p>Calle 12 #233-34A <br></br> Funza - Cundinamarca</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
                                        <div className="text">
                                            <h3>Phone</h3>
                                            <p>822564372</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        <div className="text">
                                            <h3>Email</h3>
                                            <p>colegio@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm">
                            <form>
                                <h2>Envia un mensaje</h2>
                                <div className="inputBox">
                                    <input type="text" name="" required="required" />
                                    <span>Nombre Completo</span>
                                </div>
                                <div className="inputBox">
                                    <input type="text" name="" required="required" />
                                    <span>Email</span>
                                </div>
                                <div className="inputBox">
                                    <textarea required="required"></textarea>
                                    <span>Escribe tu mensaje...</span>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Enviar"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </body>

        );
    }
}