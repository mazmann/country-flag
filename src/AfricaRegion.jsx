import { useEffect, useState } from "react";
const AfricaRegion = () => {
    let [africanCountries, setAfricanCountries] = useState([]);
    let [selectedCountry, setSelectedCountry] = useState(null);

    // let toggleParagraph = (country) => {
    //     setSelectedCountry(selectedCountry === country ? null : country);
    //   };

      let toggleParagraph = (country) => {
        if (selectedCountry === country) {
          setSelectedCountry(null);
        } else {
          setSelectedCountry(country);
        }
      };
    useEffect(() => {
        let getAfrica = async () => {
            let response = await fetch("https://restcountries.com/v3.1/region/africa")
            let json = await response.json();
            setAfricanCountries(json);
        };
        getAfrica();

    }, []);
    return (
        <div className="flagContainer">
          {africanCountries.map((country, i) => (
            <div className="eachCountry" key={i}>
              <img
                className="eachFlag"
                id="chooseFlag"
                src={country.flags.png}
                alt="country"
                onClick={() => {
                  toggleParagraph(country);
                }}
              />
              {selectedCountry === country && (
                <div className="countryInfo">
                <p>Name: {country.name.common}</p>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };

export default AfricaRegion;