import React from "react";

const closedExpenseForm = (props) => {
    const addNewExpensesHandler = () => {
        console.log('Here');
        props.openExpensesForm();
    }
    return (
        <div className="new-expense__controls">
            <div className="new-expense__actions">
                <button type="button" onClick={addNewExpensesHandler}>
                    Add new expenses
                </button>
            </div>
        </div>

    );
}

export default closedExpenseForm;