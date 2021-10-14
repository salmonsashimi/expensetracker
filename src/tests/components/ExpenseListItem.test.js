import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenseArray from '../fixtures/expenseArray'


test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenseArray[0]} />);
    expect(wrapper).toMatchSnapshot();

})