import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpenseSummary';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;