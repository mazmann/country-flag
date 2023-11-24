import { useState } from "react";
import "./styles.css"
import AfricaRegion from "./AfricaRegion"

export default function App() {
let [chooseRegion, setChooseRegion] = useState(false);
return (
  <div className="App">
    <h1>React Country Flag Practice Application</h1>
    <p>Choose between following regions below.</p>
    
    <button onClick={() => {
      setChooseRegion(true);
    }}
    >
      Africa
      </button>
      {chooseRegion && <AfricaRegion />}
    <button onClick={() => {
      setChooseRegion(true);
    }}
    >
      Asia
      </button>
    <button onClick={() => {
      setChooseRegion(true);
    }}
    >
    Europe
    </button>

  </div>
)
}



