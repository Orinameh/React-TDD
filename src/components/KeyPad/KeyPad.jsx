import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key'
import './KeyPad.css';

const KeyPad = ({callOperator, numbers, operators, setOperator, updateDisplay}) => {

    const nums = numbers.map(number => {
      return (
        <Key
          key={number}
          keyAction={updateDisplay}
          keyType="number-key"
          keyValue={number}
        />
      );
    });

    const ops = operators.map(operator => {
      return (
        <Key
          key={operator}
          keyAction={setOperator}
          keyType="operator-key"
          keyValue={operator}
        />
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
        <div className="submit-container">
          <Key
            keyAction={callOperator}
            keyType="submit-key"
            keyValue="="
          />
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