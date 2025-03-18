import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';
import { Accordion, Card, Button } from 'react-bootstrap';

const TripDetails = () => {

    // Otteniamo l'ID del viaggio dalla URL
    const { id } = useParams();

    // Cerchiamo il viaggio corrispondente all'ID
    const trip = trips.find((trip) => trip.id === parseInt(id));

    // Stato per la ricerca dei partecipanti
    const [searchTerm, setSearchTerm] = useState('');

    // Se il viaggio non viene trovato, mostriamo un messaggio di errore
    if (!trip) {
        return <div className="alert alert-danger">Viaggio non trovato</div>;
    }

    // Filtriamo i partecipanti che hanno come destinazione la meta del viaggio
    const participants = Travelers.filter(
        (traveler) => traveler.destinazione === trip.luogo
    );

    // Filtriamo ulteriormente i partecipanti in base al termine di ricerca
    const filteredParticipants = participants.filter((participant) => {

        const fullName = `${participant.nome} ${participant.cognome}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());

    });

    return (

        <>

            <div className='container-sm'>

                {/* Input di ricerca per filtrare i partecipanti */}
                <input
                    type="text"
                    placeholder="Cerca partecipante..."
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Accordion per visualizzare i dettagli dei partecipanti */}
                <Accordion defaultActiveKey="0" className="mt-4">

                    {filteredParticipants.map((participant, index) => (

                        <Card key={participant.id} className='list-group-item'>

                            <Accordion.Item className='list-group-item' eventKey={index.toString()}>

                                {/* Header dell'accordion con il nome del partecipante */}
                                <Accordion.Header>
                                    {participant.nome} {participant.cognome}
                                </Accordion.Header>

                                {/* Corpo dell'accordion con le informazioni del partecipante */}
                                <Accordion.Body>
                                    <p>Email: {participant.email}</p>
                                    <p>codice Fiscale {participant.codiceFiscale}</p>
                                    <p>cellulare {participant.telefono}</p>
                                    <Link className='dettagli' to={`/travelers/${participant.id}`}>Dettagli</Link>
                                </Accordion.Body>

                            </Accordion.Item>

                        </Card>

                    ))}

                </Accordion>

                {/* Pulsante per tornare alla home */}
                <button className='back-to' ><Link className='white' to="/">Home</Link></button>

            </div >

        </>
    );

};

export default TripDetails;