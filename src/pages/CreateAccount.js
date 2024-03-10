import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";

let lastCurrency = 'Choose Currency';

function CreateAccount() {

  // const countryList = ['BDT', 'USD', 'EUR', 'INR', 'JPY', 'OMR', 'PKR', 'RSD'];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [currency, setCurrency] = useState(lastCurrency);
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

  const userName = name.trim();
  const userNumber = number.trim();
  const userCurrency = currency;
  const userInitial = Number(initial);

  // console.log(typeof userName, userName);

  // const [currencyOptions, setCurrencyOptions] = useState({})
  
  function ok() {

// ============================== USER NAME =================================================

    if (userName) {

      console.log('ok', userName);
      const len = userName.length;
      for (let i = 0; i < len; i++){
        if (userName[i] === " " && userName[i + 1] === " ") {
          alert('Please Do Not Add Extra Space');
          return;
        }
        else {
          for (let j = 0; j < 10; j++){
            if (userName[i] == j) {
              alert('You can not use number in user name');
              return;
            }
          }
        }
      }
      console.log(len);
    }
    else {
      alert('Please Give an User Name');
      return;
    }

    // ================================ Currency =============================================
    
    if (!userCurrency || userCurrency == 'Choose Currency') {
      alert('You Have to Choose a Currency');
      return;
    }

    if (userInitial < 0) {
      alert('Please Enter Positive Amount to deposite');
      return;
    }
    // ==================================== NUMBER ==================================================
    
    if (userNumber) {
      var keys = Object.keys(localStorage);
      let ok1 = true;
      keys.map(value => {
        const person = JSON.parse(localStorage.getItem(value));
        if (person['userNumber'] == userNumber){
          ok1 = false;
        }
      })

      if (ok1 === false) {
        alert('An Account is already creted with this number Pleast try with a diffrent number');
        return;
      }

      let len = userNumber.length;
      for (let i = 0; i < len; i++){
        if (!(userNumber[i] == '0' || userNumber[i] == '1' || userNumber[i] == '2' || userNumber[i] == '3' || userNumber[i] == '4' || userNumber[i] == '5' || userNumber[i] == '6' || userNumber[i] == '7' || userNumber[i] == '8' || userNumber[i] == '9')) {
          alert('Please Give Only digit in Number section');
          return;
        }
      }
    }
    else {
      alert('You have to give a number');
      return;
    }
    //=====================================
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
    
    if (!localStorage.getItem(userName)) {
      localStorage.setItem(userName, JSON.stringify(person));
      lastCurrency = currency;
      alert("Account is created");
      setName('');
      setNumber('')
      setCurrency(lastCurrency);
      setInitial('');

    }
    else {
      alert('This User Name is taken');
    }
  }

  return (
      <>
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
            <input className="form-control" type="text" onChange={changeInitial} value={initial} placeholder="Initial Saving" />
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
</>
    );
}

export default CreateAccount;