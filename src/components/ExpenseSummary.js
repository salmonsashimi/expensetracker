import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectedExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal).format('$0,0.00');
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>.</h1>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
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