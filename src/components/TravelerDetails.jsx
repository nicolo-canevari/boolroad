import React from 'react';
import { useParams } from 'react-router-dom';
import { Travelers } from '../../data.js';

const TravelerDetails = () => {
    const { id } = useParams();
    const traveler = Travelers.find((traveler) => traveler.id === parseInt(id));

    if (!traveler) {
        return <div className="alert alert-danger">Viaggiatore non trovato</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center">{traveler.nome} {traveler.cognome}</h2>
            <div className="list-group mt-4">
                <p className="list-group-item">Email: {traveler.email}</p>
                <p className="list-group-item">Telefono: {traveler.telefono}</p>
                <p className="list-group-item">Codice fiscale: {traveler.codiceFiscale}</p>
            </div>
        </div>
    );
};

export default TravelerDetails;