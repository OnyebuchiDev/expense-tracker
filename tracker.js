const expenseName = 
document.querySelector('.expense-name');

const expenseAmount = 
document.querySelector('.expense-amount');

const button = 
document.querySelector('.add-button');
button.addEventListener('click', () => {
  const expense = {
    name: expenseName.value,
    amount: expenseAmount.value
  }
  expenses.push(expense)
  console.log(expense)
});

const expenses = [];

