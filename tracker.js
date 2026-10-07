//step 4: store multiple expenses
const expenses = [];
//step 1: selecting the elements
const expenseName = 
document.querySelector('.expense-name');

const expenseAmount = 
document.querySelector('.expense-amount');

const button = 
document.querySelector('.add-button');
//step 2: making the button respond to a click.
button.addEventListener('click', () => {
//step 3: creating the expense object.
if (expenseName.value === '' || expenseAmount.value === '') {
  return;
}
  const expense = {
    name: expenseName.value,
    amount: expenseAmount.value
  }
  expenses.push(expense)
  expenseName.value = '';
  expenseAmount.value = '';
  console.log(expense)

// creating the expense list and total expense
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += Number(expenses[i].amount)
}
 const totalAmount = document.querySelector('.total-amount');
 totalAmount.innerHTML = `$${total.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
 })}`;

if (expenses.length === 1) {
  const noExpensis = document.querySelector('.expense-lists');
  noExpensis.remove();
}
  
const expenseList = document.querySelector('.expense-list');
const { name, amount} = expense;
const html = `
 <div>${name}</div>
  <div>$${Number(amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}</div>
`;
expenseList.innerHTML += html;
});






