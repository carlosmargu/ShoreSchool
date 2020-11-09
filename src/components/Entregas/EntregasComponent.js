import React, {useState,  useEffect}from 'react';
import firebase from "../../instances/firebase";
import { v4 as uuid } from 'uuid';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import './EntregasComponent.css';

function Entrega(props) {
    console.log({props})
    const actividadId = props.match.params.id

    const [pdfUrl, setPdfUrl] = useState([]);
    const [firebaseInited, setfirebaseInited] = useState(false)

    const readFile = async(e) =>{
        const file = e.target.files[0];
        const id = uuid();
        const userId = props.userLoggedIn.localId
        const storageRef = firebase.storage().ref("pdf").child(id);
        const pdfRef=firebase.database().ref(`users/${userId}/tareas/${actividadId}/${id}`)
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url)=> {
            pdfRef.set(url);
            console.log({urlurl:url})
            const newState = [...pdfUrl, { id, url }];
            setPdfUrl(newState);
        });
    }

    const getPdfUrl = () => {
        if (!firebaseInited && props.userLoggedIn.localId){
            setfirebaseInited(true);
            const userId = props.userLoggedIn.localId;
            console.log({userLogg:props.userLoggedIn});
            console.log({useridid:props.userLoggedIn.localId});

            const pdfRef = firebase.database().ref(`users/${userId}/tareas/${actividadId}`)//.child().child('tareas').child(actividadId);
                pdfRef.on('value', (snapshot) => {
                const pdfUrls = snapshot.val();
                console.log({pdfUrls})
                const urls = [];
                for (let id in pdfUrls) {
                    urls.push({ id, url: pdfUrls[id] });
                }
                const newState = [...pdfUrl, ...urls];
                setPdfUrl(newState);
            });
        }
        
      };
    
    const deletePdf = (id) => {
        if(firebaseInited){
            const userId = props.userLoggedIn.localId;
            const storageRef = firebase.storage().ref("pdf").child(id);
            const pdfRef = firebase.database().ref(`users/${userId}/tareas/${actividadId}/${id}`)//.ref("Tareas").child("Hoy").child(id);
            storageRef.delete().then(() => {
                pdfRef.remove();
            });
        }
    };

    useEffect(() => {
        getPdfUrl();
      });

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

const mapStateToProps = state => {
    return {
        userLoggedIn: state.authenticationStore.userLoggedIn
    }
  }

  export default connect(mapStateToProps)(Entrega);