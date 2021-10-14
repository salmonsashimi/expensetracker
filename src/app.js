import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 300, createdAt: 1633014300000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 1633017300000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 700, createdAt: 1633011600000 }))


const state = store.getState();



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));