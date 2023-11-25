import { useEffect, useState } from "react";
const EuropeRegion = () => {
    let [europeCountries, setEuropeCountries] = useState([]);
    let [selectedCountry, setSelectedCountry] = useState(null);

    let toggleParagraph = (country) => {
        if (selectedCountry === country) {
            setSelectedCountry(null);
        } else {
            setSelectedCountry(country);
        }
    };

    useEffect(() => {
        let getAsia = async () => {
            let response = await fetch("https://restcountries.com/v3.1/region/europe")
            let json = await response.json();
            setEuropeCountries(json);
        };
        getAsia();

    }, []);
    
    return (
        <div className="flagContainer">
            {europeCountries.map((country, i) => (
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

export default EuropeRegion;