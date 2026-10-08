//step 4: store multiple expenses
const expenses =
JSON.parse(localStorage.getItem('expenses')) || [];
let expenseBeingEditedId;
//step 1: selecting the elements
const backgroundToggle = document.querySelector('.theme-button');
backgroundToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
})
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
    amount: expenseAmount.value,
    date: new
    Date().toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }
  expenses.push(expense)
  saveToLocalStorage();
  updateTotal();
  expenseName.value = '';
  expenseAmount.value = '';

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
    <div>${expense.date}</div>
    <button data-id="${expense.id}" class="delete-button"
    >Delete</button>
    <button data-id="${expense.id}" class="edit-button">Edit</button>
    
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

if (event.target.classList.contains('edit-button')) {
  const id =
  event.target.dataset.id;

  expenseBeingEditedId = id;

  const expenseToEdit = 
  expenses.find((expense) => {
   return expense.id == id;
  })
  console.log(expenseToEdit);

  expenseName.value =
  expenseToEdit.name;
  expenseAmount.value =
  expenseToEdit.amount;
}
});

const updateButton = 
document.querySelector('.update-button');
updateButton.addEventListener('click', () => {
  const expenseToUpdate = 
  expenses.find((expense) => {
    return expense.id == expenseBeingEditedId;
  });
    expenseToUpdate.name =
  expenseName.value;
  expenseToUpdate.amount =
  expenseAmount.value;


  const expenseItem = document.querySelector(
  `.expense-item[data-id="${expenseBeingEditedId}"]`
);

expenseItem.innerHTML = `
  <div>${expenseToUpdate.name}</div>
  <div>$${Number(expenseToUpdate.amount).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}</div>
  <button data-id="${expenseToUpdate.id}" class="delete-button">
    Delete
  </button>
  <button data-id="${expenseToUpdate.id}" class="edit-button">
    Edit
  </button>
`;
expenseName.value = '';
expenseAmount.value = '';
updateTotal();
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
 renderExpenses();

function renderExpenses() {
  expenseList.innerHTML = '';

  expenses.forEach((expense) => {
    const html = `
      <div class="expense-item" data-id="${expense.id}">
        <div>${expense.name}</div>

        <div>$${Number(expense.amount).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</div>

        <div>${expense.date}</div>

        <button data-id="${expense.id}" class="delete-button">
          Delete
        </button>

        <button data-id="${expense.id}" class="edit-button">
          Edit
        </button>
      </div>
    `;

    expenseList.innerHTML += html;
  });

  if (expenses.length === 0) {
    expenseList.innerHTML = `
    <p class="no-expenses">No expenses yet</p>
    `;
  }

  updateTotal();
 
}



function saveToLocalStorage() {
  localStorage.setItem('expenses', JSON.stringify((expenses)));
}






