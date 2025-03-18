import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trips } from '../../data.js';


const TripList = () => {

    // Stato per gestire il termine di ricerca dei viaggi
    const [searchTerm, setSearchTerm] = useState('');

    // Filtriamo i viaggi in base al termine di ricerca
    const filteredTrips = trips.filter((trip) =>

        trip.luogo.toLowerCase().includes(searchTerm.toLowerCase())

    );

    return (

        <div className="container mt-4">

            {/* Titolo della pagina */}
            <h1 className="text-center mb-4">Elenco viaggi:</h1>


            {/* Input per la ricerca dei viaggi */}
            <input
                type="text"
                placeholder="Cerca viaggio..."
                className="form-control mb-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />


            {/* Lista dei viaggi filtrati */}
            <div className="list-group">

                {filteredTrips.map((trip) => (

                    // Ogni viaggio è un link che porta ai dettagli del viaggio
                    <Link
                        key={trip.id}
                        to={`/trips/${trip.id}`}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                        <div>

                            {/* Nome del luogo */}
                            <strong className='luogo'>{trip.luogo}</strong>
                            <br />

                            {/* Data di partenza */}
                            <strong className="text-muted">
                                Partenza: {trip.dataInizio}
                            </strong>
                            <br />

                            {/* Data di ritorno */}
                            <strong className="text-muted">
                                Ritorno: {trip.dataFine}
                            </strong>

                        </div>

                        {/* Badge identificativo per i viaggi */}
                        <span className="badge bg-primary rounded-pill p-2">Bool-Roaders</span>

                    </Link>

                ))}

            </div>

        </div>

    );

};

export default TripList;