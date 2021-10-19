import uuid from 'uuid';
import database from '../firebase/firebase';
import { getDatabase, ref, get, set, remove, update, onValue, push } from "@firebase/database";


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            amount = 0,
            createdAt = 0,
            note = '' } = expenseData;
        const expense = { description, amount, createdAt, note };

        return push(ref(database, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}


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

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startSetExpenses = () => {
    return (dispatch) => {
        return get(ref(database, 'expenses')).then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}
