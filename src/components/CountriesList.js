import { Link } from 'react-router-dom';

// Countries from API we passed in App.js
function CountriesList({ countries, loading }) {
  return (
    <div className="flex-container">
      <h1>List of Countries</h1>
      <hr />

      {loading && <h2>Loading...</h2>}

      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <Link to={`countries/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="country"
              />
              <h3>{country.name.common}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
