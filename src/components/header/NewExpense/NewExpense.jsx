import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = ({onAddExpense}) => {
    const saveExpenseData = (data) => {
      const  expenseData={
            ...data,
            id:Math.random().toString()
        };
        onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveFormDate={saveExpenseData} />
        </div>
    )
}

export default NewExpense