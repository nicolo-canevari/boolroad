import React from 'react';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="travelers" element={<TravelList />} />
          <Route path="travelers/:id" element={<TravelerDetails />} />
          <Route path="trips" element={<TripList />} />
          <Route path="trips/:id" element={<TripDetails />} />
          <Route path="add-trip" element={<AddTrip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;