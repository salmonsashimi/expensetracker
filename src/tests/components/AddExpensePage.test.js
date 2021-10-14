import React from 'react';
import { AddExpensePage } from '../../components/AddExpensePage'
import { shallow } from 'enzyme';
import expenseArray from '../fixtures/expenseArray';

test('should render AddExpensePage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history} />)
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenseArray[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenseArray[1])
})