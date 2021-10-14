import expenseReducer from '../../reducers/expenses';
import expenseArray from '../fixtures/expenseArray';

test('should return default expenses', () => {
    const action = { type: '@@INIT' }
    const result = expenseReducer(expenseArray, action)
    expect(result).toEqual(expenseArray);
})

test('should add new expense into empty state', () => {
    const action = { type: 'ADD_EXPENSE', expense: expenseArray[0] }
    const result = expenseReducer(undefined, action)
    expect(result[0]).toEqual(expenseArray[0])
})

test('should add new expense into existing state', () => {
    const newExpense = {
        description: 'Food',
        amount: '120',
        createdAt: 100000,
        note: 'nice to eat'
    }
    const action = { type: 'ADD_EXPENSE', expense: newExpense }
    const result = expenseReducer(expenseArray, action)
    expect(result).toEqual([...expenseArray, newExpense])
})

test('should edit existing expense amount', () => {
    const action = {
        type: 'EDIT_EXPENSE', id: expenseArray[0].id, edits: { amount: 5000 }
    }
    const result = expenseReducer(expenseArray, action);
    expect(result[0].amount).toEqual(5000)
})

test('should not existing expense amount with wrong id', () => {
    const action = {
        type: 'EDIT_EXPENSE', id: 100, edits: { amount: 5000 }
    }
    const result = expenseReducer(expenseArray, action);
    expect(result[0].amount).toEqual(expenseArray[0].amount)
})

test('should remove expense from expenses array', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenseArray[2].id }
    const result = expenseReducer(expenseArray, action)
    expect(result).toEqual(expenseArray.splice(0, 2))
})

test('should not remove expense with wrong id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 100 }
    const result = expenseReducer(expenseArray, action)
    expect(result).toEqual(expenseArray)
})