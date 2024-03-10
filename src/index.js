import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from './pages/CreateAccount';
import SendMoney from './pages/SendMoney';
import UserInfo from './pages/UserInfo';
import DepositeMoney from './pages/DepositeMoney';
import ShowInfo from './pages/ShowInfo';
import UserList from './pages/UserList';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "CreateAccount",
    element: <CreateAccount/>,
  },
  {
    path: "SendMoney",
    element: <SendMoney/>,
  },
  {
    path: "UserInfo",
    element: <UserInfo/>,
  },
  {
    path: "DepositeMoney",
    element: <DepositeMoney/>,
  },
  {
    path: "showInfo",
    element: <ShowInfo/>,
  },
  {
    path: "UserList",
    element: <UserList/>,
  },
  
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />   
  </React.StrictMode>
);

// I make some changes here to setup react router
// line 8 - 9
// linr 19 

reportWebVitals();
