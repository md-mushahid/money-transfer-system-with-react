import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { useHref } from 'react-router-dom';
import axios from 'axios';

function App() {

  return (
    <div className="App">

      <br></br><br></br>

      <p className="h2">Welcome To Nothing Bank</p>

      <small className="text-muted">I am your manager. How can I help you?</small>

      <br></br><br></br>

      <a href='CreateAccount'><button className="btn btn-primary">Create Account</button></a>

      <br></br><br></br>

      <a href='DepositeMoney'><button className="btn btn-primary">Deposit Money</button></a>

      <br></br><br></br>

      <a href='SendMoney'><button className="btn btn-primary">Send Money</button></a>

      <br></br><br></br>

      <a href='UserInfo'><button className="btn btn-primary">User Information</button></a>

    </div>
  );
}

export default App;
