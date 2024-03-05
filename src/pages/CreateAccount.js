import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";

function CreateAccount() {

  // const countryList = ['BDT', 'USD', 'EUR', 'INR', 'JPY', 'OMR', 'PKR', 'RSD'];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [currency, setCurrency] = useState('');
  const [initial, setInitial] = useState('');

  const changeName = event => {
    setName(event.target.value);
  }

  const changeNumber = event => {
    setNumber(event.target.value);
  }

  const changeCurrency = event => {
    setCurrency(event.target.value);
  }
  
  const changeInitial = event => {
    setInitial(event.target.value);
  }

  const userName = name;
  const userNumber = number;
  const userCurrency = currency;
  const userInitial = Number(initial);

  // const [currencyOptions, setCurrencyOptions] = useState({})
  
  function ok() {
    if (!userCurrency) {
      alert('You Have to Choose a Currency');
      return;
    }
    console.log(userName, userNumber, userCurrency, userInitial);

    let description;

    if (userInitial > 0) {
      description = `You created an account and deposited ${userInitial} ${userCurrency}`;
    }
    else {
      description = 'You Created an Account'
    }
    
    let person = {
      "userNumber": userNumber,
      "defaultCurrency": userCurrency,
      "amount": userInitial,
      "lastTransectionId": "1",
      "description": {
        "1": description
      }
    }
    
    if (!localStorage.getItem(name)) {
      
      localStorage.setItem(name, JSON.stringify(person));
    
      alert("Account is created");
      setName('');
      setNumber('')
      setCurrency('');
      setInitial('');
    }
    else {
      alert('This User Name is taken');
    }
  }

    return (
      <div className="account-form">
        <form>

          <div>
            <input className="form-control" type="text" onChange={changeName} value={name} placeholder="Account's Name" />
          </div>

              <br/>
          
          <div>
            <input className="form-control" type="text" onChange={changeNumber} value={number} placeholder="Mobile Number" />
          </div>

              <br/>
          
          <div>
            <input className="form-control" type="number" onChange={changeInitial} value={initial} placeholder="Initial Saving" />
          </div>
              
          <br/>
          
          <div>
            <select className="form-control" onChange={changeCurrency} placeholder="Default Currency">
              <option value='Choose Currency'>Choose Currency</option>
              <option value='BDT'>BDT</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='INR'>INR</option>
              <option value='JPY'>JPY</option>
              <option value='OMR'>OMR</option>
              <option value='PKR'>PKR</option>
              <option value='RSD'>RSD</option>
            </select>
          </div>

              <br/>
          
          <div className="App">
            <button onClick={ok} type="button" className="btn btn-dark">Create Account</button>
          </div>

        </form>
      </div>
    );
}

export default CreateAccount;