import expenseTotal from '../../selectors/ExpenseTotal';
import expenseArray from '../fixtures/expenseArray'

test('Should correctly add up no expenseTotal', () => {
    expect(expenseTotal([])).toBe(0)
})

test('Should correctly add up one expenseTotal', () => {
    expect(expenseTotal([expenseArray[1]])).toBe(1000)
})

test('should correctly add up all expenseTotal', () => {
    expect(expenseTotal(expenseArray)).toBe(1600)
})