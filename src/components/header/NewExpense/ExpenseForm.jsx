import React, { useState } from 'react'
import './ExpenseForm.css';
import { Button } from '@mui/material';
const ExpenseForm = ({onSaveFormDate}) => {
const [formData, setFormData] = useState({title:"",amount:0,date:""});
const handleFromData=(event)=>{
    const {name,value} = event.target;
    setFormData((prevValues)=>({
        ...prevValues,
        [name]:value,
    })
    )
}
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    onSaveFormDate(formData)
    setFormData({title:"",amount:0,date:""})

  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={formData.title}  onChange={handleFromData}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' value={formData.amount} name='amount' step='0.01' onChange={handleFromData}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2022-01-01' value={formData.date} name='date' max='2025-12-31' onChange={handleFromData}/>
        </div>
      </div>
      <div className='new-expense__actions'>
      <Button sx={{ml:1}} variant='contained' type="submit">Add Expense</Button>
      </div>
    </form>
  )
}

export default ExpenseForm