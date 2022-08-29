import React from 'react';
import ReactDOM from 'react-dom';

let jsExpressions = "JS Expressions";

ReactDOM.render(
   //React.Fragment or use <> </>
    <> 
    
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