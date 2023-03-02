import { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = ' https://ih-countries-api.herokuapp.com/countries';

function List() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  //function to call the api and set the state
  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      console.log(response);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>

      {loading && <h2>Loading...</h2>}

      {countries.map((country) => {
        return (
          <div className='card' key={country._id}>
            <h3>{country.name.common}</h3>
            

          </div>
        );
      })}
    </div>
  );
}

export default List;