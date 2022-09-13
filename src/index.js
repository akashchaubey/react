import React from 'react';
import ReactDOM from 'react-dom';

const name = "JS Expressions";
let fname = "akash";
let lname = "chaubey";
let currDate = new Date().toLocaleDateString();
let currTime = new Date().toLocaleTimeString();

ReactDOM.render(
   //React.Fragment or use <> </>
    <> 
        <h1>how to use { name } in this project</h1>
        <h1>how to use { 3 * 3 } in this project</h1>
        <h1>Math random number = { Math.random() }</h1>
        <h2>Use of template literals Option 1 = {fname} {lname}</h2>
        <h2>Use of template literals Option 2 = {fname + lname}</h2>
        <h2>Use of template literals Option 3 = {fname+" "+lname}</h2>
        <h2>{`Use of template literals Option 4 = ${fname} ${lname}`}</h2>
        <h1>Top 5 netflix series </h1>
        <p>This is top 5 netflix series in world</p>
        <ol>
            <li>Daredevil</li>
            <li>Money Heist</li>
            <li>Narcos</li>
            <li>Top Boy</li>
            <li>Stranger Things</li>
        </ol>
        
        <h1>Date Chalange</h1>
        <p>Current Date = {currDate}</p>
        <p>Current Time = {currTime}</p>
        
    </>,
document.getElementById('root'));