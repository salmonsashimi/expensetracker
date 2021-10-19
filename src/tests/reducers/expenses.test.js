import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should return default expenses', () => {
    const action = { type: '@@INIT' }
    const result = expenseReducer(expenses, action)
    expect(result).toEqual(expenses);
})

test('should add new expense into empty state', () => {
    const action = { type: 'ADD_EXPENSE', expense: expenses[0] }
    const result = expenseReducer(undefined, action)
    expect(result[0]).toEqual(expenses[0])
})

test('should add new expense into existing state', () => {
    const newExpense = {
        description: 'Food',
        amount: '120',
        createdAt: 100000,
        note: 'nice to eat'
    }
    const action = { type: 'ADD_EXPENSE', expense: newExpense }
    const result = expenseReducer(expenses, action)
    expect(result).toEqual([...expenses, newExpense])
})

test('should edit existing expense amount', () => {
    const action = {
        type: 'EDIT_EXPENSE', id: expenses[0].id, edits: { amount: 5000 }
    }
    const result = expenseReducer(expenses, action);
    expect(result[0].amount).toEqual(5000)
})

test('should not existing expense amount with wrong id', () => {
    const action = {
        type: 'EDIT_EXPENSE', id: 100, edits: { amount: 5000 }
    }
    const result = expenseReducer(expenses, action);
    expect(result[0].amount).toEqual(expenses[0].amount)
})

test('should remove expense from expenses array', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[2].id }
    const result = expenseReducer(expenses, action)
    expect(result).toEqual(expenses.splice(0, 2))
})

test('should not remove expense with wrong id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 100 }
    const result = expenseReducer(expenses, action)
    expect(result).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0]]
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0]])
})