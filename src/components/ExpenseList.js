import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';
import ExpenseListFilter from './ExpenseListFilter';


export const ExpenseList = (props) => {
    return (
        <div>
            <ExpenseListFilter />
            <h1>Expense List</h1>
            {props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);
