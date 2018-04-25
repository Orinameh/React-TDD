import React from 'react';
import {shallow} from 'enzyme';
import KeyPad from './KeyPad';

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <KeyPad
        callOperator={jest.fn()} //since it doesn't have direct access to th Calculator methods, we use jest.fn() to create a mock function 
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});