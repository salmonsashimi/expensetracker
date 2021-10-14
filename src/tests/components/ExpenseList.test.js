import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenseArray from '../fixtures/expenseArray';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenseArray} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot();
})