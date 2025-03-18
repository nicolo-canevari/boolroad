import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';

const AddTrip = () => {

    // Stati per memorizzare le informazioni del viaggio
    const [luogo, setLuogo] = useState('');
    const [dataInizio, setDataInizio] = useState('');
    const [dataFine, setDataFine] = useState('');

    // Stato per i partecipanti al viaggio
    const [partecipanti, setPartecipanti] = useState([]);

    // Stato per gestire i dati del nuovo partecipante in fase di inserimento
    const [nuovoPartecipante, setNuovoPartecipante] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        codiceFiscale: '',

    });

    // Hook per la navigazione
    const navigate = useNavigate();


    // Funzione per gestire l'input dei dati del partecipante
    const handlePartecipanteChange = (e) => {

        setNuovoPartecipante({

            ...nuovoPartecipante,
            [e.target.name]: e.target.value,

        });

    };

    // Funzione per aggiungere un nuovo partecipante alla lista dei partecipanti
    const handleAggiungiPartecipante = () => {

        setPartecipanti([...partecipanti, nuovoPartecipante]);

        // Resetta il form del partecipante dopo l'aggiunta
        setNuovoPartecipante({
            nome: '',
            cognome: '',
            email: '',
            telefono: '',
            codiceFiscale: '',

        });

    };

    // Funzione per gestire il submit del form e salvare il viaggio
    const handleSubmit = (e) => {

        e.preventDefault();

        // Creiamo il nuovo viaggio con un ID incrementale
        const nuovoViaggio = {

            id: trips.length + 1,
            luogo,
            dataInizio,
            dataFine,

        };

        // Aggiungiamo il nuovo viaggio all'array dei viaggi
        trips.push(nuovoViaggio);

        partecipanti.forEach((partecipante) => {

            // Aggiungiamo i partecipanti all'array dei viaggiatori, collegandoli al viaggio
            Travelers.push({
                ...partecipante,
                id: Travelers.length + 1,
                destinazione: luogo,

            });

        });

        // Dopo aver aggiunto il viaggio, reindirizziamo alla pagina dei viaggi
        navigate('/trips');

    };

    return (

        <div className="container mt-4">

            <h2 className="text-center">Aggiungi nuovo viaggio</h2>

            {/* Form per aggiungere un nuovo viaggio */}
            <form onSubmit={handleSubmit} className="mt-4">

                {/* Campo per il luogo del viaggio */}
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Luogo"
                        value={luogo}
                        onChange={(e) => setLuogo(e.target.value)}
                    />
                </div>

                {/* Campo per la data di inizio */}
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Data inizio"
                        value={dataInizio}
                        onChange={(e) => setDataInizio(e.target.value)}
                    />
                </div>

                {/* Campo per la data di fine */}
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Data fine"
                        value={dataFine}
                        onChange={(e) => setDataFine(e.target.value)}
                    />
                </div>

                <h3 className="mt-4 text-center">Nuovo Partecipante</h3>

                {/* Mostra i partecipanti aggiunti finora */}
                {partecipanti.map((partecipante, index) => (

                    <div key={index} className="alert alert-info">

                        {partecipante.nome} {partecipante.cognome}

                    </div>

                ))}

                {/* Form per aggiungere un partecipante */}
                <div className="form-group mt-4">
                    <input
                        type="text"
                        name="nome"
                        className="form-control"
                        placeholder="Nome"
                        value={nuovoPartecipante.nome}
                        onChange={handlePartecipanteChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="cognome"
                        className="form-control"
                        placeholder="Cognome"
                        value={nuovoPartecipante.cognome}
                        onChange={handlePartecipanteChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={nuovoPartecipante.email}
                        onChange={handlePartecipanteChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="tel"
                        name="telefono"
                        className="form-control"
                        placeholder="Telefono"
                        value={nuovoPartecipante.telefono}
                        onChange={handlePartecipanteChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="codiceFiscale"
                        className="form-control"
                        placeholder="Codice fiscale"
                        value={nuovoPartecipante.codiceFiscale}
                        onChange={handlePartecipanteChange}
                    />
                </div>

                {/* Pulsanti per aggiungere partecipanti e salvare il viaggio */}
                <div className='d-flex gap-3'>
                    <button
                        type="button"
                        className="btn btn-primary my-3 "
                        onClick={handleAggiungiPartecipante}
                    >
                        Aggiungi partecipante
                    </button>

                    <button type="submit" className="btn btn-success my-3 ml-3">
                        Aggiungi viaggio
                    </button>

                </div>

            </form>

        </div>

    );

};

export default AddTrip;