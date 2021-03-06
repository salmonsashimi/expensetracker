import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses';


test('should filter by text value', () => {
    const filter = {
        text: 'bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    expect(selectExpenses(expenses, filter)).toEqual([expenses[1], expenses[0]]);
})

test('should filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: 499,
        endDate: undefined
    }

    expect(selectExpenses(expenses, filter)).toEqual([expenses[1], expenses[2]]);
})

test('should filter by endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: 501
    }

    expect(selectExpenses(expenses, filter)).toEqual([expenses[2], expenses[0]]);
})


test('should sort by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})

test('should sort by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]])
})