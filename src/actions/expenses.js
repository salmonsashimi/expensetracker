import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({ description = '', amount = 0, createdAt = 0, note = '' } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        amount,
        createdAt,
        note
    }
})

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
export const editExpense = (id, edits) => ({
    type: 'EDIT_EXPENSE',
    id,
    edits
})