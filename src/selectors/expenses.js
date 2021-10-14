export default (expenses, { text, sortBy, startDate = undefined, endDate = undefined }) => {

    return expenses.filter((expense) => {
        const startDateMatch = !startDate ? true : startDate.valueOf() <= expense.createdAt.valueOf();
        const endDateMatch = !endDate ? true : endDate.valueOf() >= expense.createdAt.valueOf();
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            if (a.createdAt > b.createdAt) return -1;
        } else if (sortBy === 'amount') {
            if (parseInt(a.amount) > parseInt(b.amount)) return -1;
        }
    })

}
