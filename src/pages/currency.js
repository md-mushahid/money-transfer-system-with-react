import React, { useState, useEffect } from "react";
import "./styles.css";
const axios = require("axios");

function App() {
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [ratesList, setRatesList] = useState([]);
  const [selectFromCurrency, setFromSourceCurrency] = useState("");
  const [selectToCurrency, setSelectToCurrency] = useState("");

  const getSourceCurrency = (source) => {
    setSourceCurrency(source);
  };

  const getTargetCurrency = (target) => {
    setTargetCurrency(target);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("https://api.exchangeratesapi.io/latest");
        setRatesList(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const selectSourceCurrency = (sourceCurr) => {
    setFromSourceCurrency(sourceCurr);
  };

  const selectTargetCurrency = (targetCurr) => {
    setSelectToCurrency(targetCurr);
  };

  const convertRate = () => {
    const rateCalc = sourceCurrency * targetCurrency;
    console.log("print rate: " + rateCalc);
  };

  return (
    <div className="App">
      <div className="globalCurrencyConverter">
        <h2>Currency Converter</h2>
        <div className="container box">
          <label>
            <input
              name="sourceCurrency"
              type="text"
              placeholder="fromCurrency"
              onChange={(event) => getSourceCurrency(event.target.value)}
            />
            <select
              className="fromCurrency"
              defaultValue={"DEFAULT"}
              onChange={(event) => selectSourceCurrency(event.target.value)}
            >
              <option>USD</option>
              <option value="DEFAULT">AUD</option>
              <option>NZD</option>
              <option>INR</option>
              <option>UAE Dirham</option>
            </select>
          </label>
          <label>
            <input
              name="targetCurrency"
              type="text"
              placeholder="toCurrency"
              onChange={(event) => getTargetCurrency(event.target.value)}
            />
            <select
              className="toCurrency"
              onChange={(event) => selectTargetCurrency(event.target.value)}
            >
              <option>USD</option>
              <option>AUD</option>
              <option>NZD</option>
              <option>INR</option>
              <option>UAE Dirham</option>
            </select>
          </label>
          <div className="recordBtn">
            <button name="convert" onClick={(event) => convertRate()}>
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
