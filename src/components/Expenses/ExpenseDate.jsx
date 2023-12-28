import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
 const dateObject = new Date(props.date);
 const day = dateObject.getDate();
const month = dateObject.getMonth() + 1; // Months are zero-indexed, so add 1
const year = dateObject.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;