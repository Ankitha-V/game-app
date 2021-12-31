import React from "react";
import { Router } from "react-router";
import{Link} from "react-router-dom";
import './App.css';
import './index.css';

function Learn(){
  return(
    <div className="style">
      <h1>Guess A Number</h1>
      <input type="text" placeholder="enter your name"/><br/><br/>
      <input type="number" placeholder="enter a number"/><br/><br/>
      <Link to = "/Course" >
      <button>Next</button>
      </Link>
      
      
    </div>
  );
}
export default Learn;