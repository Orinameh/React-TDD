import React from 'react';
import {shallow} from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import KeyPad from '../KeyPad/KeyPad';

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
	});
	
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render the Display and Keypad Components', () => {
		// takes array of all elements and return true
		expect(wrapper.containsAllMatchingElements([

			// wrapper.instance is used to access state variables and methods 
			<Display displayValue={wrapper.instance().state.displayValue}/>,
			<KeyPad
				callOperator={wrapper.instance().callOperator}
				numbers={wrapper.instance().state.numbers}
				operators={wrapper.instance().state.operators}
				setOperator={wrapper.instance().setOperator}
				updateDisplay={wrapper.instance().updateDisplay}
			/>
		]
		)).toEqual(true);
	});
	
	// it('should render the Display Component', () => {
	// 	expect(wrapper.containsMatchingElement(
	// 		// wrapper.instance is used to access state variables and methods 
	// 		<Display displayValue={wrapper.instance().state.displayValue}/>
	// 	)).toEqual(true);
	// });
});