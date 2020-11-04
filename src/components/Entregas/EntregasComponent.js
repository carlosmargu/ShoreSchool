import React, {useState,  useEffect}from 'react';
import firebase from "../../instances/firebase";
import { v4 as uuid } from 'uuid';

export default function Entrega() {
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
            <h1> Subir archivo</h1>
            <input type="file" onChange={readFile}/>
            {pdfUrl
                ? pdfUrl.map(({ id, url }) => {
                    return (
                    <div key={id}>
                         <embed src={url} width="500" height="375" 
                         type="application/pdf"></embed>
                        <button onClick={() => deletePdf(id)}>Delete</button>
                    </div>
                    );
                })
                : ''}
        </div>
    );
}