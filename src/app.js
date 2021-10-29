import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('login')
        console.log(user);
        store.dispatch(login(user.uid));
        // https://firebase.google.com/docs/reference/js/firebase.User
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })

    } else {
        console.log('logout')
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
});


