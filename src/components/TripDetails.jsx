import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trips, Travelers } from '../../data.js';

const TripDetails = () => {
    const { id } = useParams();
    const trip = trips.find((trip) => trip.id === parseInt(id));
    const [searchTerm, setSearchTerm] = useState('');

    if (!trip) {
        return <div className="alert alert-danger">Viaggio non trovato</div>;
    }

    const participants = Travelers.filter(
        (traveler) => traveler.destinazione === trip.luogo
    );

    const filteredParticipants = participants.filter((participant) => {
        const fullName = `${participant.nome} ${participant.cognome}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    return (

        <>

            <div className="container mt-4">
                <h2 className="text-center">{trip.luogo}</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cerca partecipante..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <ul className="list-group mt-4">
                    {filteredParticipants.map((participant) => (
                        <li key={participant.id} className="list-group-item">
                            <Link to={`/travelers/${participant.id}`}>
                                {participant.nome} {participant.cognome}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className='back-to' ><Link to="/">Home</Link></button>

            </div >

        </>
    );
};

export default TripDetails;