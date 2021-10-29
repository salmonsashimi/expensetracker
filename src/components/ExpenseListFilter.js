import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => (
        this.setState(() => ({ calendarFocused }))
    )
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') this.props.sortByDate();
        if (e.target.value === 'amount') this.props.sortByAmount();
    }
    render() {
        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input className='text-input' type='text' value={this.props.filter.text} onChange={this.onTextChange} placeholder='Search expenses' />
                    </div>
                    <div className='input-group__item'>
                        <select className='select' onChange={this.onSortChange}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className='input-group__item'>
                        <DateRangePicker
                            startDate={this.props.filter.startDate}
                            startDateId="start"
                            endDate={this.props.filter.endDate}
                            endDateId="end"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);