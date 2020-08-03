const income = document.getElementById('money-plus');
const balance = document.getElementById('balance');
const list = document.getElementById('list');
const expense = document.getElementById('money-minus');
const amount = document.getElementById('amount');
const transactionTitle = document.getElementById('text');
const addTrasactionBtn = document.querySelector('.btn');
const deleteBtn = document.getElementsByClassName('delete-btn');
let historyItems = document.getElementById('list').querySelectorAll('li');

let currentIncome = 0;
let currentExpense = 0;
let inputAmount = 0;
let balanceAmount = 0;
let inputAmoutArray = [];
let inputTextArray = [];
let locatStorageVariables = [];

// Add event listener to the delete button
function deleteUpdate() {
    historyItems = document.getElementById('list').querySelectorAll('li');

    historyItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            let removedAmount = Number(e.target.value);
            let child = (e.target.parentNode)
            var parent = child.parentNode;
            let index = Array.prototype.indexOf.call(parent.children, child);
            inputAmoutArray.splice(index, 1);
            inputTextArray.splice(index, 1);
            e.target.parentNode.remove();
            inputAmount = removedAmount;
            updateAfterDelete(e)
        });
    });
};

// Update after delete
function updateAfterDelete(e) {
    e.preventDefault();
    historyItems = document.getElementById('list').querySelectorAll('li')

    if (historyItems.length > 0) {
        if (inputAmount > 0) {
            currentIncome = currentIncome + inputAmount * -1;
            income.innerHTML = `<div>$${currentIncome}</div>`;
            updateBalance();
            historyData();
        } else {

            currentExpense = currentExpense + inputAmount * -1;
            expense.innerHTML = `<div>-$${currentExpense * -1}</div>`;
            updateBalance();
            historyData();
        }
    } else {

        currentIncome = 0;
        currentExpense = 0;
        inputAmount = 0;
        balanceAmount = 0;
        inputAmoutArray = [];
        inputTextArray = [];
        locatStorageVariables = [];
        income.innerHTML = `<div>$${currentIncome}</div>`;
        expense.innerHTML = `<div>-$${currentExpense * -1}</div>`;
        updateBalance();
        historyData();
    }
}

// Update the history after user input received(UI)
function updateHistory() {
    if (inputAmount >= 0) {
        inputAmoutArray.push(inputAmount);
        inputTextArray.push(transactionTitle.value)
        historyData()
        list.innerHTML += `
    <li class=plus>
        ${transactionTitle.value} <span>+${inputAmount}</span><button class="delete-btn" value ="${inputAmount}">x</button></li>
    </li>    `;
    } else {
        inputAmoutArray.push(inputAmount);
        inputTextArray.push(transactionTitle.value);
        historyData()
        list.innerHTML += `
        <li class="minus">${transactionTitle.value}<span>${inputAmount}</span><button class="delete-btn"  value ="${inputAmount}">x</button></li>
        `;
    }
}

// Update the balance amount based on income and expense
function updateBalance() {
    if (historyItems.length >= 0) {
        balanceAmount = currentIncome + currentExpense;
        if (balanceAmount > -1) {
            balance.innerHTML = `<div>$${balanceAmount}</div>`
        } else {
            balance.innerHTML = `<div>-$${balanceAmount * -1}</div>`
        }
    } else {
        balanceAmount = 0;
        balance.innerHTML = `<div>$${balanceAmount}</div>`
    }
}

// Update local storage
let retrievedTransaction = localStorage.getItem("transaction");
let retrievedAmount = localStorage.getItem("amount");
let retrievedVariable = localStorage.getItem("variables");

function loadLocalSotrage() {
    if (retrievedTransaction) {
        let variableArray = JSON.parse(retrievedVariable);
        inputTextArray = JSON.parse(retrievedTransaction);
        inputAmoutArray = JSON.parse(retrievedAmount);
        currentIncome = variableArray[0];
        currentExpense = variableArray[1];
        inputAmount = variableArray[2];
        balanceAmount = variableArray[3];

        updateBalance();
        income.innerHTML = `<div>$${currentIncome}</div>`;
        expense.innerHTML = `<div>-$${currentExpense * -1}</div>`;

        let transaction = JSON.parse(retrievedTransaction);
        let amountFromStorage = JSON.parse(retrievedAmount);
        transaction.forEach(function (transaction, index) {
            const eachAmount = amountFromStorage[index];
            if (eachAmount >= 0) {
                list.innerHTML += `
            <li class=plus>
                ${transaction} <span>+${eachAmount}</span><button class="delete-btn" value ="${eachAmount}">x</button></li>
            </li>    `

            } else {
                list.innerHTML += `
            <li class=minus>
                ${transaction} <span>${eachAmount}</span><button class="delete-btn" value ="${eachAmount}">x</button></li>
            </li>    `
            }

        }); deleteUpdate();
    } else {
        console.log("no data");
    }
}
loadLocalSotrage();

function historyData() {
    localStorage.setItem("transaction", JSON.stringify(inputTextArray));
    localStorage.setItem("amount", JSON.stringify(inputAmoutArray));
    localStorage.setItem("InputAmout", inputAmount);

    locatStorageVariables[0] = currentIncome;
    locatStorageVariables[1] = currentExpense;
    locatStorageVariables[2] = inputAmount;
    locatStorageVariables[3] = balanceAmount;
    localStorage.setItem("variables", JSON.stringify(locatStorageVariables));
}

// Update the income based on user input
function updateIncome(e) {
    e.preventDefault();
    inputAmount = Number(amount.value);
    localStorage.setItem("InputAmout", inputAmount);

    if (inputAmount > 0) {
        currentIncome = currentIncome + inputAmount;
        income.innerHTML = `<div>$${currentIncome}</div>`;
        updateBalance();
        updateHistory();
    } else {

        currentExpense = currentExpense + inputAmount;
        expense.innerHTML = `<div>-$${currentExpense * -1}</div>`;
        updateBalance();
        updateHistory();
    }
    deleteUpdate();
    historyData();
}

// Event listener to check any transaction added
addTrasactionBtn.addEventListener('click', updateIncome);


