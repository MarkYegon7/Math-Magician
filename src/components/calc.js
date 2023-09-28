// import React from 'react';
// import './calc.css';

// const Calculator = () => (
//   <div className="calculator">
//     <div className="calculator-display">
//       <input type="text" value="0" readOnly />
//     </div>
//     <div className="calculator-buttons">
//       {/* Your calculator buttons go here */}
//     </div>
//   </div>
// );

// export default Calculator;

import React from 'react';
import './calc.css';

const Calculator = () => (
  <div className="calculator">
    <div className="calculator-display">
      <input type="text" value="0" readOnly />
    </div>
    <div className="calculator-buttons">
      {/* Number Buttons */}
      <button className="calc-button" type="button">AC</button>
      <button className="calc-button" type="button">+/-</button>
      <button className="calc-button" type="button">%</button>
      <button className="calc-button operator-button" type="button">^</button>
      <button className="calc-button" type="button">9</button>
      <button className="calc-button" type="button">8</button>
      <button className="calc-button" type="button">7</button>
      <button className="calc-button operator-button" type="button">x</button>
      <button className="calc-button" type="button">6</button>
      <button className="calc-button" type="button">5</button>
      <button className="calc-button" type="button">4</button>
      <button className="calc-button operator-button" type="button">-</button>
      <button className="calc-button" type="button">3</button>
      <button className="calc-button" type="button">2</button>
      <button className="calc-button" type="button">1</button>
      <button className="calc-button operator-button" type="button">+</button>
      <button className="calc-button" type="button"> </button>
      <button className="calc-button" type="button">0</button>
      <button className="calc-button" type="button">.</button>
      <button className="calc-button operator-button" type="button">=</button>
    </div>
  </div>
);

export default Calculator;
