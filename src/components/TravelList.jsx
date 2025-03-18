import { Link } from 'react-router-dom';
import { Travelers } from '../../data.js';

const TravelList = () => {
    return (

        <>

            <div className="container mt-4">
                <h2 className="text-center">Elenco viaggiatori</h2>
                <ul className="list-group mt-4">
                    {Travelers.map((traveler) => (
                        <li key={traveler.id} className="list-group-item">
                            <Link to={`/travelers/${traveler.id}`}>
                                {traveler.nome} {traveler.cognome}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>

        </>
    );
};

export default TravelList;