import React from 'react';
import {shallow} from 'enzyme';
import KeyPad from './KeyPad';

describe('KeyPad', () => {
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

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('renders the values of numbers', () => {
    wrapper.setProps({ numbers: ['0', '1', '2']});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators', () => {
    wrapper.setProps({operators: ['+', '-', '*', '/']});
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });
});