import { useEffect, useState } from "react";
const AsiaRegion = () => {
    let [asianCountries, setAsianCountries] = useState([]);
    useEffect(() => {
        let getAfrica = async () => {
            let response = await fetch("https://restcountries.com/v3.1/region/africa")
            let json = await response.json();
            console.log(json);
            setAsianCountries(json);
        };
        getAfrica();
    }, []);
    return (
        <div>
            <select>
                <option value="">Hums</option>
                <option value="">Hums</option>
            </select>
        </div>
    )
}

export default AsiaRegion;