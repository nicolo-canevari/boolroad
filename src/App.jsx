import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import HomePage from './pages/HomePage';
import TravelList from './components/TravelList';
import TripList from './components/TripList';
import TravelerDetails from './components/TravelerDetails';
import TripDetails from './components/TripDetails';
import AddTrip from './components/AddTrip';

function App() {

  return (

    // BrowserRouter avvolge l'app e abilita il routing
    <BrowserRouter>

      <Routes>

        {/* Layout di default che include l'Header e l'Outlet per le pagine */}
        <Route path="/" element={<DefaultLayout />}>

          {/* Pagina principale */}
          <Route index element={<HomePage />} />

          {/* Elenco di tutti i viaggiatori */}
          <Route path="travelers" element={<TravelList />} />

          {/* Dettagli di un singolo viaggiatore, identificato tramite ID */}
          <Route path="travelers/:id" element={<TravelerDetails />} />

          {/* Elenco di tutti i viaggi */}
          <Route path="trips" element={<TripList />} />

          {/* Dettagli di un singolo viaggio, identificato tramite ID */}
          <Route path="trips/:id" element={<TripDetails />} />

          {/* Pagina per aggiungere un nuovo viaggio */}
          <Route path="add-trip" element={<AddTrip />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}

export default App;