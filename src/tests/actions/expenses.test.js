import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup removeExpense action objects with values', () => {
    const id = 'abc123'
    const result = removeExpense(id)
    expect(result).toEqual({ type: 'REMOVE_EXPENSE', id: 'abc123' })
})


test('should setup editExpense action object with values', () => {
    const id = '123abc'
    const edits = { note: 'new note' }
    const result = editExpense(id, edits);
    expect(result).toEqual({ type: 'EDIT_EXPENSE', id: '123abc', edits: { note: 'new note' } })
})

test('should setup addExpense action object with values', () => {
    const newExpense = { description: 'Food', amount: 123, createdAt: 1000, note: 'last month' }
    expect(addExpense(newExpense)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...newExpense,
            id: expect.any(String)
        }

    })
})


test('should setup addExpense action object with no values', () => {
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
        }
    })
})