import React from "react";

function UserList() {

    var keys = Object.keys(localStorage);
    console.log(keys);
    var ans;

    function findUsr(name) {
        const person = JSON.parse(localStorage.getItem(name));
        return person;
    }
  
    return (
        <div className="App">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Account Name</th>
                        <th scope="col">User Number</th>
                        <th scope="col">Default Currency</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        keys.map(value => ((<tr>
                            <td>{value}</td>
                            <td>{findUsr(value)['userNumber']}</td>
                            <td>{findUsr(value)['defaultCurrency']}</td>
                            <td>{findUsr(value)['amount']} {findUsr(value)['defaultCurrency']}</td>
                        </tr>)))
                    }
                </tbody>
           </table>
        </div>
    )
}

export default UserList;