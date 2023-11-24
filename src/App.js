import { useState } from "react";
import "./styles.css"
import AfricaRegion from "./AfricaRegion"
import AsiaRegion from "./AsiaRegion"

export default function App() {
  let [showAfrica, setShowAfrica] = useState(false);
  let [showAsia, setShowAsia] = useState(false);
  let [showEurope, setShowEurope] = useState(false);

  let toggleAfrica = () => setShowAfrica(!showAfrica);
  let toggleAsia = () => setShowAsia(!showAsia);
  let toggleEurope = () => setShowEurope(!showEurope);

  return (
    <div className="App">
      <h1>React Country Flag Practice Application</h1>
      <p>Choose between the following regions below.</p>
<div className="RegionButtons">
      <button onClick={toggleAfrica}>
        Africa
      </button>
      {showAfrica && <AfricaRegion />}

      <button onClick={toggleAsia}>
        Asia
      </button>
      {showAsia && <AsiaRegion />}

      <button onClick={toggleEurope}>
        Europe
      </button>
      {/* {showEurope && <EuropeRegion />} */}
      </div>
    </div>
  );

}



