import { useEffect, useState } from "react";
const AfricaRegion = () => {
    let [africanCountries, setAfricanCountries] = useState([]);
    let [selectedCountry, setSelectedCountry] = useState(null);
    let toggleParagraph = (country) => {
        setSelectedCountry(selectedCountry === country ? null : country);
      };
    useEffect(() => {
        let getAfrica = async () => {
            let response = await fetch("https://restcountries.com/v3.1/region/africa")
            let json = await response.json();
            console.log(json);
            setAfricanCountries(json);
        };
        getAfrica();
    }, []);
    return (
        <div>
          {africanCountries.map((country, i) => (
            <div key={i}>
              <img
                id="chooseFlag"
                src={country.flags.png}
                alt="country"
                onClick={() => {
                  console.log(country.name);
                  toggleParagraph(country);
                }}
              />
              {selectedCountry === country && (
                <p>{country.name.common}</p>
              )}
            </div>
          ))}
        </div>
      );
    };

export default AfricaRegion;