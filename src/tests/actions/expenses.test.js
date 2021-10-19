import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, startEditExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import { getDatabase, ref, get, once, set, remove, update, onValue, push } from "firebase/database";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt }
    });
    set(ref(database, 'expenses'), expenseData).then(() => done());
});

test('should setup removeExpense action objects with values', () => {
    const id = 'abc123'
    const result = removeExpense(id)
    expect(result).toEqual({ type: 'REMOVE_EXPENSE', id: 'abc123' })
})

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return get(ref(database, `expenses/${id}`))
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

test('should setup editExpense action object with values', () => {
    const id = '123abc'
    const edits = { note: 'new note' }
    const result = editExpense(id, edits);
    expect(result).toEqual({ type: 'EDIT_EXPENSE', id: '123abc', edits: { note: 'new note' } })
})

test('should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    const edits = { amount: 1009 }
    store.dispatch(startEditExpense(id, edits)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            edits
        });
        return get(ref(database, `expenses/${id}`)).then((snapshot) => {
            expect(snapshot.val().amount).toBe(edits.amount);
            done();
        })
    })
})

test('should setup addExpense action object with values', () => {
    expect(addExpense(expenses[1])).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
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

test('should setup setExpenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done()
    })
})