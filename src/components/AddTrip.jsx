import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';

const AddTrip = () => {

    const [luogo, setLuogo] = useState('');
    const [dataInizio, setDataInizio] = useState('');
    const [dataFine, setDataFine] = useState('');
    const [partecipanti, setPartecipanti] = useState([]);
    const [nuovoPartecipante, setNuovoPartecipante] = useState({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        codiceFiscale: '',
    });

    const navigate = useNavigate();

    const handlePartecipanteChange = (e) => {

        setNuovoPartecipante({

            ...nuovoPartecipante,
            [e.target.name]: e.target.value,

        });

    };

    const handleAggiungiPartecipante = () => {

        setPartecipanti([...partecipanti, nuovoPartecipante]);

        setNuovoPartecipante({
            nome: '',
            cognome: '',
            email: '',
            telefono: '',
            codiceFiscale: '',
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const nuovoViaggio = {
            id: trips.length + 1,
            luogo,
            dataInizio,
            dataFine,
        };

        trips.push(nuovoViaggio);

        partecipanti.forEach((partecipante) => {
            Travelers.push({
                ...partecipante,
                id: Travelers.length + 1,
                destinazione: luogo,
            });

        });

        navigate('/trips');

    };

    return (

        <div className="container mt-4">
            <h2 className="text-center">Aggiungi nuovo viaggio</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Luogo"
                        value={luogo}
                        onChange={(e) => setLuogo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Data inizio"
                        value={dataInizio}
                        onChange={(e) => setDataInizio(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Data fine"
                        value={dataFine}
                        onChange={(e) => setDataFine(e.target.value)}
                    />
                </div>

                <h3 className="mt-4">Partecipanti</h3>
                {partecipanti.map((partecipante, index) => (
                    <div key={index} className="alert alert-info">
                        {partecipante.nome} {partecipante.cognome}
                    </div>
                ))}

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

                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleAggiungiPartecipante}
                >
                    Aggiungi partecipante
                </button>
                <button type="submit" className="btn btn-success mt-3 ml-2">
                    Aggiungi viaggio
                </button>
            </form>
        </div>

    );

};

export default AddTrip;