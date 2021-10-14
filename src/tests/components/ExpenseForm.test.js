import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenseArray from '../fixtures/expenseArray';
import moment from 'moment';

test('should render empty ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenseArray[0]} />)
    expect(wrapper).toMatchSnapshot();
})


test('should render error for invalid form submittion', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const value = 'test value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(wrapper.state('description')).toBe(value)
})


test('should set note on textarea change', () => {
    const value = 'test value for textarea'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { target: { value } })
    expect(wrapper.state('note')).toBe(value)
})

//should set amount if valid input
test('should set amount if valid input', () => {
    const value = '45.63';
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
})

//should set amount if invalid input
test('should not set amount if invalid input', () => {
    const value = 'jiraeonioea';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount').length).toBe(0)

})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm onFormSubmit={onSubmitSpy} expense={expenseArray[0]} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        amount: expenseArray[0].amount,
        createdAt: expenseArray[0].createdAt,
        description: expenseArray[0].description,
        note: expenseArray[0].note
    })
})

test('should set new date on date change', () => {
    const date = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(date)
    expect(wrapper.state('createdAt')).toEqual(date)
})

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('focused')).toBe(focused)

})