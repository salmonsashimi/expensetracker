import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//expense reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.edits };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}


//filters reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.date }
        case 'SET_END_DATE':
            return { ...state, endDate: action.date }

        default:
            return state;
    }
}

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            if (a.createdAt < b.createdAt) return -1;
        } else if (sortBy === 'amount') {
            if (parseInt(a.amount) < parseInt(b.amount)) return -1;
        }
    })

}

//store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
)



store.subscribe(() => {
    const { expenses, filter } = store.getState()
    const visibleExpenses = getVisibleExpense(expenses, filter)
    console.log(visibleExpenses)
})


// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, edits) => ({
    type: 'EDIT_EXPENSE',
    id,
    edits
})

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 }))
const rental = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 100 }))
store.dispatch(addExpense({ description: 'Milk', amount: 700, createdAt: -1000 }))
// store.dispatch(setStartDate(10))

store.dispatch(sortByAmount());
store.dispatch(editExpense(rental.expense.id, { amount: 500 }));


// store.dispatch(removeExpense(rental.expense.id));


// store.dispatch(setTextFilter('helo mamamia'));


// store.dispatch(sortByAmount())

// store.dispatch(sortByDate())


// store.dispatch(setStartDate(120))
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250))
