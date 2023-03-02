import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // <== IMPORT
import axios from 'axios';

import Header from './components/Header'; // <== IMPORT
import CountriesList from './components/CountriesList'; // <== IMPORT
import CountryDetails from './components/CountryDetails'; // <== IMPORT

function App() {
  // Get All Countries from API before the return!

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries`
      );
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  console.log(countries);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            loading ? <h1>Loading</h1> : <CountriesList countries={countries} />
          }
        />

        <Route
          path="/countries/:id"
          element={
            loading ? (
              <h1>Loading Selected</h1>
            ) : (
              <CountryDetails countries={countries} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
