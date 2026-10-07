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
    id: Date.now(),
    name: expenseName.value,
    amount: expenseAmount.value
  }
  expenses.push(expense)
  updateTotal();
  expenseName.value = '';
  expenseAmount.value = '';
  console.log(expense)

// creating the expense list and total expense

if (expenses.length === 1) {
  const noExpensis = document.querySelector('.no-expenses');
  noExpensis.remove();
}

const { name, amount} = expense;
const html = `
 <div class="expense-item"
  data-id="${expense.id}">
  <div>${name}</div>

    <div>$${Number(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}</div>
    <button data-id="${expense.id}" class="delete-button"
    >Delete</button>
  </div>
`;
expenseList.innerHTML += html;
});

  
const expenseList = document.querySelector('.expense-list');
expenseList.addEventListener('click', (event) => {
 if 
(event.target.classList.contains('delete-button')) {

  const id = 
  event.target.dataset.id;

  const  expenseIndex =
  expenses.findIndex((expense) => {
    return expense.id == id;
    
  })
  
  expenses.splice(expenseIndex, 1);
  event.target.closest('.expense-item').remove();

  updateTotal();
}

if (expenses.length === 0) {
  expenseList.innerHTML += `
  <p class="no-expenses"> No expenses yet </p>
  `
}
})


function updateTotal() {
let total = 0;


for (let i = 0; i < expenses.length; i++) {
  total += Number(expenses[i].amount)
}
 const totalAmount = document.querySelector('.total-amount');
 totalAmount.innerHTML = `$${total.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
 })}`;

}





