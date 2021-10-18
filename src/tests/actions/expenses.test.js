import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenseArray from '../fixtures/expenseArray';
import database from '../../firebase/firebase';
import { getDatabase, ref, get, once, set, remove, update, onValue, push } from "firebase/database";



const createMockStore = configureMockStore([thunk]);

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
    expect(addExpense(expenseArray[1])).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseArray[1]
    })
})


test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expense = {
        description: 'Desktop',
        amount: 4000,
        note: 'Birthday present',
        createdAt: 100000
    }
    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        })

        return get(ref(database, `expenses/${actions[0].expense.id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done()
    })
})


test('should add expense with default values to database and store', (done) => {
    const store = createMockStore({});
    const expense = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        })

        return get(ref(database, `expenses/${actions[0].expense.id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done()
    })
}
)
// test('should setup addExpense action object with default values', () => {
//     expect(addExpense()).toEqual({
//         type: 'ADD_EXPENSE', 
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: '',
//         }
//     })
// })