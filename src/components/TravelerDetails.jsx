import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Travelers } from '../../data.js';

const TravelerDetails = () => {

    // Hook per la navigazione
    const navigate = useNavigate();
    // Otteniamo l'ID del viaggiatore dalla URL
    const { id } = useParams();
    // Cerchiamo il viaggiatore corrispondente all'ID ricevuto
    const traveler = Travelers.find((traveler) => traveler.id === parseInt(id));


    // Se il viaggiatore non viene trovato, mostriamo un messaggio di errore
    if (!traveler) {

        return <div className="alert alert-danger">Viaggiatore non trovato</div>;

    }

    return (

        <div className="container mt-4">

            {/* Titolo con il nome e il cognome del viaggiatore */}
            <h2 className="text-center">{traveler.nome} {traveler.cognome}</h2>

            {/* Lista delle informazioni dettagliate del viaggiatore */}
            <div className="list-group mt-4">
                <p className="list-group-item">Email: {traveler.email}</p>
                <p className="list-group-item">Telefono: {traveler.telefono}</p>
                <p className="list-group-item">Codice fiscale: {traveler.codiceFiscale}</p>
                <p className="list-group-item">Numero d'emergenza: {traveler.numeroEmergenza}</p>
                <p className="list-group-item">Allergie: {traveler.allergie}</p>
                <p className="list-group-item">Data di Nascita {traveler.dataNascita}</p>
            </div>

            {/* Pulsante per tornare alla pagina precedente */}
            <button className='back-to' onClick={() => navigate(-1)}>
                Torna indietro
            </button>

        </div>

    );

};

export default TravelerDetails;