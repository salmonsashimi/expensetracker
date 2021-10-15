import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal).format('$0,0.00');
    return (
        <div>
            Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}.
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filter)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);