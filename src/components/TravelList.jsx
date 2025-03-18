import { Link } from 'react-router-dom';
import { Travelers } from '../../data.js';

const TravelList = () => {

    return (

        <>

            <div className="container mt-4">

                {/* Titolo della pagina */}
                <h2 className="text-center">Elenco viaggiatori</h2>

                {/* Lista dei viaggiatori */}
                <ul className="list-group mt-4">

                    {/* Iteriamo sull'array Travelers per mostrare ogni viaggiatore */}
                    {Travelers.map((traveler) => (

                        <li key={traveler.id} className="list-group-item">

                            {/* Link alla pagina del dettaglio del viaggiatore */}
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