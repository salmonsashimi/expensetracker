import selectExpenses from '../../selectors/expenses'
import expenseArray from '../fixtures/expenseArray';


test('should filter by text value', () => {
    const filter = {
        text: 'bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    expect(selectExpenses(expenseArray, filter)).toEqual([expenseArray[1], expenseArray[0]]);
})

test('should filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: 499,
        endDate: undefined
    }

    expect(selectExpenses(expenseArray, filter)).toEqual([expenseArray[1], expenseArray[2]]);
})

test('should filter by endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: 501
    }

    expect(selectExpenses(expenseArray, filter)).toEqual([expenseArray[2], expenseArray[0]]);
})


test('should sort by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenseArray, filter);
    expect(result).toEqual([expenseArray[1], expenseArray[2], expenseArray[0]])
})

test('should sort by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenseArray, filter);
    expect(result).toEqual([expenseArray[1], expenseArray[0], expenseArray[2]])
})