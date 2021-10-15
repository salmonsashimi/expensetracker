import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>expensetracker</h1>
        <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

export default Header;