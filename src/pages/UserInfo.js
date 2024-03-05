import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ShowInfo from "./ShowInfo";

function UserInfo() {

  const [user, setUser] = useState();
  const [number, setNumber] = useState();
  const [showUser, setShowUser] = useState();

  const userName = event => {
    setUser(event.target.value);
  }

  const userNum = event => {
    setNumber(event.target.value);
  }


  const ok = () => {
    
    if (localStorage.getItem(user)) {
      const person = JSON.parse(localStorage.getItem(user));
      // const person = localStorage.getItem(user);
      console.log(person['amount']);
      let des = "";
      const transection = person['description'];
      for (let key in transection) {
        des = des + `<p> ${key} : ` + transection[key] + "<p/>";
      }
      const ans = `<p>Account Name : ${user}<p/> <p>Amount : ${person['amount']}<p/>  <p>Default Currency: ${person['defaultCurrency']}.<p/> <p>Transections : <p/><p><p/>`;
     // const print  = `Account Name: ${user},    \n Default Currency :   ${person['defaultCurrency']}, \n Total Amount : ${person['amount']}, ${person['defaultCurrency']}|||||`
      setShowUser(ans+des);
      // console.log(person);
      

    }
    else {
      alert('Not a user');
    }
  }

  return (
       <>
        <div className="account-form">
        <form>

          <div>
            <input class="form-control" type="text" onChange={userName} value={user} placeholder="Account's Name" />
          </div>

              <br/>
          
          <div>
            <input class="form-control" type="text" onChange={userNum} value={ number } placeholder="Mobile Number" />
          </div>

              <br/>
          
          <div className="App">
           <button type="button" class="btn btn-dark" onClick ={ok} >Show Info</button>
          </div>

        </form>
        
      </div>
      {
        (showUser) ? document.write(showUser) : null
      }
      </>
    )
}

export default UserInfo;