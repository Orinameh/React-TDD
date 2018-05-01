import React from 'react';
import PropTypes from 'prop-types';

const KeyPad = ({callOperator, numbers, operators, setOperator, updateDisplay}) => {

    const nums = numbers.map(number => {
      return (
        <p key={number}>{number}</p>
      );
    });

    const ops = operators.map(operator => {
      return (
        <p key={operator}>{operator}</p>
      );
    });

    return(
      <div className="keypad-container">
        <div className='numbers-container'>
          {nums}
        </div>
        <div className="operators-container">
          {ops}
        </div>
      </div>
    );
}

KeyPad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
}

export default KeyPad;