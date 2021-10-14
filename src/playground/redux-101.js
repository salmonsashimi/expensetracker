import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':

            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count }
        default:
            return state;
    }

})

//subscribe runs everytime state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

const increaseCount = (incrementBy = 1) => ({
    type: 'INCREMENT',
    incrementBy
})


const decreaseCount = (decrementBy = 1) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

store.dispatch(increaseCount())
store.dispatch(increaseCount(5))
store.dispatch(decreaseCount(100))
store.dispatch(resetCount())
store.dispatch(setCount({ count: 200 }))

