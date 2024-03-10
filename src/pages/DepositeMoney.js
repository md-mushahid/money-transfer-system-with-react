import React, { useState } from "react";

function DepositeMoney() {
  
  const [amount, setAmount] = useState();
  // const [currency, setCurrency] = useState();
  const [number, setNumber] = useState();
  const [name, setName] = useState();

  // const depositCurrency = event => {
  //   setCurrency(event.target.value);
  // }

  const depositAmount = event => {
    setAmount(event.target.value);
  }

  const depositNumber = event => {
    setNumber(event.target.value);
  }

  const depositName = event => {
    setName(event.target.value);
  }

  const ok = () => {
    
    const t_name = name.trim();
    const t_number = number.trim();
    const t_amount = amount;
    //const t_currency = currency;

    if (localStorage.getItem(t_name)) {

      const person = JSON.parse(localStorage.getItem(t_name));
      localStorage.removeItem(t_name);

      if (person.userNumber == t_number) {

        const lastAmount = Number(person.amount);

        person.amount = lastAmount + Number(t_amount);

        const id = Number(person.lastTransectionId) + 1;

        person.lastTransectionId = id;
        
        person.description[id] = `You Deposited ${t_amount} ${person['defaultCurrency']}`;

        localStorage.setItem(t_name, JSON.stringify(person));

        alert('deposited');

        setAmount('');
       // setCurrency('');
        setNumber('');
        setName('');

      }
      else {
        alert("Wrong Number");
      }
      // console.log(person);
    }
    else {
      alert('You have No account In this bank');
    }
  }


    return (
        <div className="account-form">
        <form>

          <div>
            <input className="form-control" onChange={depositName} type="text" value={name} placeholder="Account's Name" />
          </div>

              <br/>
          
          <div>
            <input className="form-control" onChange={depositNumber} type="text" value={number} placeholder="Mobile Number" />
          </div>

              <br/>
          
          <div>
            <input className="form-control" onChange={depositAmount} type="text" value={amount} placeholder="Amount (default currency)" />
          </div>

          <br />
          
          {/* <div>
            <select className="form-control" onChange={depositCurrency} placeholder="Default Currency">
              <option value='BDT'>BDT</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='INR'>INR</option>
              <option value='JPY'>JPY</option>
              <option value='OMR'>OMR</option>
              <option value='PKR'>PKR</option>
              <option value='RSD'>RSD</option>
            </select>
          </div> */}
          
            <br />
          <div className="App">
            <button type="button" onClick={ok} className="btn btn-dark">Save</button> 
          </div>

        </form>
      </div>
    )
}

export default DepositeMoney;