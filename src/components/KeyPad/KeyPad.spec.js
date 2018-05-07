import React from 'react';
import {mount, shallow} from 'enzyme';
import Keypad from './KeyPad';
import Key from '../Key/Key';

/**
 * Shallow rendering method only goes one layer deep and returns the 
 * contents of the component being shallow rendered and not the contents of child components. 
 * In other words, when these tests use "find", the return contents are just Key elements, 
 * not the actual content inside the Key. For this functionality we can use Enzyme mount, 
 * which does a full DOM render and allows to us to get the text values of the child elements. 
 * We’ll move these tests into their own describe statement to prevent unnecessary calls to 
 * shallow.
 * 
  As a rule for writing your rendering tests:
  Always start with shallow (shallow render)
  Use mount, when you want to test either
  componentDidMount or componentDidUpdate
  DOM rendering, component lifecycle, and the behavior of child components
 */

describe('Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 4 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render an instance of the Key component for each index of numbers, operators, and the submit Key', () => {
    const numbers = ['0', '1'];
    const operators = ['+', '-'];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    wrapper.setProps({numbers, operators});
    expect(wrapper.find('Key').length).toEqual(keyTotal);
  });
});

describe('mounted Keypad', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it('renders the values of numbers to the DOM', () => {
    wrapper.setProps({numbers: ['0', '1', '2']})
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  });

  it('renders the values of operators to the DOM', () => {
    wrapper.setProps({operators: ['+', '-', '*', '/']});
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });
});