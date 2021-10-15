import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary with one expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={1.00} />);
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={221} expenseTotal={50012.213} />);
    expect(wrapper).toMatchSnapshot()

})