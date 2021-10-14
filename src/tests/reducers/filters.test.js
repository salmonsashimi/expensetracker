import moment from 'moment';
import filterReducer from '../../reducers/filters';

const today = moment();


test('should set default state for filter reducer', () => {
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }

    const action = { type: '@@INIT' }

    const result = filterReducer(undefined, action);
    expect(result).toEqual(defaultState);
})

test('should set text filter to "bill"', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'bill' }
    const result = filterReducer(undefined, action)

    expect(result.text).toBe(action.text);
})

test('should set sortBy filter to amount', () => {
    const action = { type: 'SORT_BY_AMOUNT' }
    const result = filterReducer(undefined, action)

    expect(result.sortBy).toBe('amount');
})

test('should set sortBy filter to date', () => {
    const state = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_DATE' }
    const result = filterReducer(state, action)

    expect(result.sortBy).toBe('date');
})

test('should set filter start date to today', () => {
    const action = { type: 'SET_START_DATE', date: today }
    const result = filterReducer(undefined, action)
    expect(result.startDate).toBe(today);
})

test('should set filter start date to today', () => {
    const action = { type: 'SET_END_DATE', date: today }
    const result = filterReducer(undefined, action)
    expect(result.endDate).toBe(today);
})