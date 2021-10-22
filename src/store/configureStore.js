import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//store creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )


    return store;
}
