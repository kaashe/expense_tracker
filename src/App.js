import { Grid, Typography } from "@mui/material";
import Header from "./components/header/Header";
import Card from "./components/header/mainLayout/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/header/NewExpense/NewExpense";
import { useState } from "react";
const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];
function App() {
  const [allExpenses, setAllExpenses] = useState(Dummy_Expenses);
  console.log(allExpenses,"all expenses");
  const addExpensehandler=(expense)=>{
    setAllExpenses((prevExpense)=>{
      return [expense,...prevExpense]
    }
    )
  }
  return (
    <Grid container direction={"column"} gap={1} sx={{backgroundColor:'#000',height:'1000px'}}>
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses items={allExpenses} />
    </Grid>
  );
}

export default App;
