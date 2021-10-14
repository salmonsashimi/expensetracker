import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'



let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilter
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            filter={filters} />)
})

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filter: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})


test('should handle text change', () => {
    wrapper.find('input').simulate('change', { target: { value: 'bill' } })
    expect(setTextFilter).toHaveBeenLastCalledWith('bill')
})

test('should sortBy Date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', { target: { value: 'date' } });
    expect(sortByDate).toHaveBeenCalled();
})

test('should sortBy Amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } });
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date change', () => {
    const startDate = moment(0).add(2, 'years');
    const endDate = moment(0).add(4, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
})

test('should handle date focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})