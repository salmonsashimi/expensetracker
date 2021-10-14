import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment'

test('test should generate start date object', () => {
    const today = moment();
    expect(setStartDate(today)).toEqual({
        type: 'SET_START_DATE',
        date: today
    })
})

test('test should generate end date object', () => {
    const today = moment();
    expect(setEndDate(today)).toEqual({
        type: 'SET_END_DATE',
        date: today
    })
})


test('test should generate filled text filter object', () => {
    expect(setTextFilter('Bill')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Bill'
    })
})

test('test should generate empty text filter object', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('test should generate sort by amount object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('test should generate sort by date object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})


