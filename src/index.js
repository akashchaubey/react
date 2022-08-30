import React from 'react';
import ReactDOM from 'react-dom';

const name = "JS Expressions";

ReactDOM.render(
   //React.Fragment or use <> </>
    <> 
        <h1>how to use { name } in this project</h1>
        <h1>how to use { 3 * 3 } in this project</h1>
        <h1>Math random number = { Math.random() }</h1>
        <h1>Top 5 netflix series </h1>
        <p>This is top 5 netflix series in world</p>
        <ol>
            <li>Daredevil</li>
            <li>Money Heist</li>
            <li>Narcos</li>
            <li>Top Boy</li>
            <li>Stranger Things</li>
        </ol>
    </>,
document.getElementById('root'));