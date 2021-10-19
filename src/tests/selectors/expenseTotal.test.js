import expenseTotal from '../../selectors/ExpenseTotal';
import expenses from '../fixtures/expenses'

test('Should correctly add up no expenseTotal', () => {
    expect(expenseTotal([])).toBe(0)
})

test('Should correctly add up one expenseTotal', () => {
    expect(expenseTotal([expenses[1]])).toBe(1000)
})

test('should correctly add up all expenseTotal', () => {
    expect(expenseTotal(expenses)).toBe(1600)
})