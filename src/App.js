import React from "react";
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './EmployeeForm.jsx'

function App() {

  function handleOnClick() {
   alert("hello");
  }
  return (
    <div className="App">

      <EmployeeForm />
    </div>
  )
}

export default App;
