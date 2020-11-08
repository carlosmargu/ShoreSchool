import React, {useState,  useEffect}from 'react';
import firebase from "../../instances/firebase";
import { v4 as uuid } from 'uuid';
import { Jumbotron } from 'reactstrap';
import './EntregasComponent.css';

export default function Entrega(props) {
    const [pdfUrl, setPdfUrl] = useState([]);
    const readFile = async(e) =>{
        const file = e.target.files[0];
        const id = uuid();
        const storageRef = firebase.storage().ref("pdf").child(id);
        const pdfRef=firebase.database().ref("Tareas").child("Hoy").child(id);
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url)=> {
            pdfRef.set(url);
            const newState = [...pdfUrl, { id, url }];
            setPdfUrl(newState);
        });
    }

    const getPdfUrl = () => {
        const pdfRef = firebase.database().ref("Tareas").child("Hoy");
        pdfRef.on('value', (snapshot) => {
          const pdfUrls = snapshot.val();
          const urls = [];
          for (let id in pdfUrls) {
            urls.push({ id, url: pdfUrls[id] });
          }
          const newState = [...pdfUrl, ...urls];
          setPdfUrl(newState);
        });
      };
    
    const deletePdf = (id) => {
    const storageRef = firebase.storage().ref("pdf").child(id);
    const pdfRef = firebase.database().ref("Tareas").child("Hoy").child(id);
    storageRef.delete().then(() => {
        pdfRef.remove();
    });
    };

    useEffect(() => {
        getPdfUrl();
      }, []);

    return (
        <div>
            <Jumbotron>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <h1 className="tituloentre"> Sección de Entregas</h1>
                            <p>Sube el documento con la tarea correspondiente a la semana actual</p>
                            <input type="file" onChange={readFile}/>
                             {pdfUrl
                                ? pdfUrl.map(({ id, url }) => {
                                    return (
                                    <div key={id}>
                                        <h6>Archivo cargado correctamente</h6>
                                        <embed src={url} width="600" height="600" 
                                        type="application/pdf"></embed>
                                        <div className="espaciobtnentre">
                                        <button className="btnentregas" onClick={() => deletePdf(id)}>Borrar Archivo</button>
                                        </div>   
                                    </div>
                                    );
                                })
                                : ''}
                        </div>
                        <div class="col-sm">
                        <img src="https://i.ibb.co/bv9kjbz/Imagen1.png" alt="Imagen1" border="0"/>
                        </div>
                    </div>
                </div>
            
            </Jumbotron>
            
            
        </div>
    );
}