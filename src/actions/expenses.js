import uuid from 'uuid';
import database from '../firebase/firebase';
import { getDatabase, ref, get, set, remove, update, onValue, push } from "@firebase/database";


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            amount = 0,
            createdAt = 0,
            note = '' } = expenseData;
        const expense = { description, amount, createdAt, note };

        return push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return remove(ref(database, `users/${uid}/expenses/${id}`)).then(() => {
            dispatch(removeExpense(id))
        })
    }
}

// EDIT_EXPENSE
export const editExpense = (id, edits) => ({
    type: 'EDIT_EXPENSE',
    id,
    edits
})
export const startEditExpense = (id, edits) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return update(ref(database, `users/${uid}/expenses/${id}`), edits).then(() => {
            dispatch(editExpense(id, edits))
        })
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return get(ref(database, `users/${uid}/expenses`)).then((snapshot) => {
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
