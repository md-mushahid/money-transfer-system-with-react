import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function SendMoney() {
  // ----------------  Currency API -----------------------------------------------------

  const [rate, setRate] = useState();

    // const fetchData = async (senderCurrency, receiverCurrency) => {
    //   try {
    //     const data = await axios.get("https://v6.exchangerate-api.com/v6/3dbf5ea982ab726d0b02e96d/latest/USD");
        
    //     setRate(data);

    //     const object = rate;

    //     const x = object.data.conversion_rates[senderCurrency];
    //     const y = object.data.conversion_rates[receiverCurrency];

    //     console.log(x, y);
    //     console.log(y / x);
    //     return Number(y/x);

    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
  
  // -------------------- sender info -------------------------------------------------

  const [sender, setSender] = useState();
  const [senderNumber, setSenderNumber] = useState();

  const senderName = event => {
    setSender(event.target.value);
  }

  const senderNum = event => {
    setSenderNumber(event.target.value);
  }

  // ------------------------------ receiver info ----------------------------------------------

  const [receiver, setReceiver] = useState();
  
  const receiverName = event => {
    setReceiver(event.target.value);
  }

  // -------------------------- amount ------------------------------------------
  
  const [amount, setAmount] = useState();

  const moneyAmount = event => {
    setAmount(event.target.value);
  }

  // ------------------------------- Transfer Money -----------------------------
  
  const ok = () => {
    const t_amount = Number(amount);
    if (localStorage.getItem(sender) && localStorage.getItem(receiver)) {

      const personSender = JSON.parse(localStorage.getItem(sender));
  
      if (personSender.userNumber === senderNumber) {
        const userAmount = personSender['amount'];
  
        if (userAmount >= amount) {
  
          const personReceiver = JSON.parse(localStorage.getItem(receiver));
  
          const senderDefaultCurrency = personSender.defaultCurrency;
          const receiverDefaultCurrency = personReceiver.defaultCurrency;
          
          const fetchData = async (senderCurrency, receiverCurrency) => {
            try {
              const data = await axios.get("https://v6.exchangerate-api.com/v6/3dbf5ea982ab726d0b02e96d/latest/USD");
              
              setRate(data);
      
              const object = rate;
      
              const x = object.data.conversion_rates[senderCurrency];
              const y = object.data.conversion_rates[receiverCurrency];
      
              console.log(x, y);
              console.log(y / x);


              const amountReceiverGet = Number(y / x ) * (t_amount);
    
              // console.log(convertCurrency);
    
              const senderOldAmount = Number(personSender['amount']);
    
              const senderNewAmount = senderOldAmount - Number(amount);
    
              personSender['amount'] = senderNewAmount;

              const senderTransectionId = Number(personSender['lastTransectionId']) + 1;
              personSender['lastTransectionId'] = senderTransectionId;
              personSender['description'][senderTransectionId] = `You send ${t_amount} ${personSender['defaultCurrency']} to ${receiver}`;
              localStorage.setItem(sender, JSON.stringify(personSender));
    
              const receiverOdlAmount = Number(personReceiver['amount']);
    
              const receiverNewAmount = Number(receiverOdlAmount) + Number(amountReceiverGet);
              
              personReceiver['amount'] = receiverNewAmount;

              const receiverTransectionId = Number(personReceiver['lastTransectionId']) + 1;
              personReceiver['lastTransectionId'] = receiverTransectionId;
              personReceiver['description'][receiverTransectionId] = `You recived ${amountReceiverGet} ${personReceiver['defaultCurrency']} from ${sender}`;
               
              localStorage.setItem(receiver, JSON.stringify(personReceiver));

              alert('Send');
              setSender('');
              setAmount('');
              setReceiver('');
              setSenderNumber('');

      
            } catch (e) {
              console.log(e);
              alert('Network Error :( try again ');
            }
          };

          fetchData(senderDefaultCurrency, receiverDefaultCurrency);
  
        }
        else {
          alert('You do not have sufficent balance');
        }
      }
      else {
        alert('Wrong Sender Number');
      }
    }
    else {
      alert('Invalide Sender or Receiver');
    }

    
  }
  

    return (
        <div className="account-form">
        <form>
          
        <div>
            <input className="form-control" onChange={senderName} type="text" value={sender} placeholder="Your Account Name" />
          </div>

                <br/>
          
          <div>
            <input className="form-control" type="text" onChange={senderNum} value={senderNumber} placeholder="Your Mobile Number" />
          </div>

                <br />
                
          <div>
            <input className="form-control" type="text" onChange={receiverName} value={receiver} placeholder="Recever Account Name" />
          </div>

                <br/>
          
          <div>
            <input className="form-control" type="text" onChange={moneyAmount} value={amount} placeholder="Amount" />
          </div>

                <br/>
          
          <div className="App">
          <button onClick={ok} type="button" class="btn btn-dark">Send</button>
          </div>

        </form>
      </div>
    )
}

export default SendMoney;