import { Link } from 'react-router-dom';
import { trips } from '../../data.js';

const TripList = () => {

    return (

        <div className="container mt-4">
            <h2 className="text-center mb-4">Elenco viaggi:</h2>
            <div className="list-group">
                {trips.map((trip) => (
                    <Link
                        key={trip.id}
                        to={`/trips/${trip.id}`}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <strong className='luogo'>{trip.luogo}</strong>
                            <br />
                            <strong className="text-muted">
                                Partenza: {trip.dataInizio}
                            </strong>
                            <br />
                            <strong className="text-muted">
                                Ritorno: {trip.dataFine}
                            </strong>
                        </div>

                        <span className="badge bg-primary rounded-pill">Bool-Roaders</span>

                    </Link>

                ))}

            </div>

        </div>

    );

};

export default TripList;