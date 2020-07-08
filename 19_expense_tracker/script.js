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

// Add event listener to the delete button
function deleteUpdate() {
    historyItems = document.getElementById('list').querySelectorAll('li')
    historyItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            let removedAmount = Number(e.target.value);
            console.log(e.target.parentNode.parentNode);
            let child = (e.target.parentNode)
            var parent = child.parentNode;
            let index = Array.prototype.indexOf.call(parent.children, child);
            console.log("index", index)
            e.target.parentNode.remove();
            inputAmount = removedAmount;
            updateAfterDelete(e)
        });
    })
}

// Update after delete
function updateAfterDelete(e) {
    e.preventDefault();

    if (historyItems.length > 0) {
        if (inputAmount > 0) {
            currentIncome = currentIncome + inputAmount * -1;
            income.innerHTML = `<div>$${formatMoney(currentIncome)}</div>`;
            updateBalance();
        } else {

            currentExpense = currentExpense + inputAmount * -1;
            expense.innerHTML = `<div>-$${formatMoney(currentExpense) * -1}</div>`;
            updateBalance();
        }
    } else {
        currentIncome = 0;
        currentExpense = 0;
        income.innerHTML = `<div>$${formatMoney(currentIncome)}</div>`;
        expense.innerHTML = `<div>-$${formatMoney(currentExpense) * -1}</div>`;
        updateBalance();
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
        ${transactionTitle.value} <span>+${formatMoney(inputAmount)}</span><button class="delete-btn" value ="${formatMoney(inputAmount)}">x</button></li>
    </li>    `;
    } else {
        inputAmoutArray.push(inputAmount);
        inputTextArray.push(transactionTitle.value);
        historyData()
        list.innerHTML += `
        <li class="minus">${transactionTitle.value}<span>${formatMoney(inputAmount)}</span><button class="delete-btn"  value ="${formatMoney(inputAmount)}">x</button></li>
        `;
    }
}

// Update the balance amount based on income and expense
function updateBalance() {
    if (historyItems.length >= 0) {
        balanceAmount = currentIncome + currentExpense;
        if (balanceAmount > -1) {
            balance.innerHTML = `<div>$${formatMoney(balanceAmount)}</div>`
        } else {
            balance.innerHTML = `<div>-$${formatMoney(balanceAmount) * -1}</div>`
        }

    } else {
        balanceAmount = 0;
        balance.innerHTML = `<div>$${formatMoney(balanceAmount)}</div>`
    }
}

let color = ["red", "green", "red", "blue"]

// Update local storage
function historyData() {
    // historyItems = document.getElementById('list').querySelectorAll('li');
    // console.log(historyItems)
    // localStorage.setItem("colors", JSON.stringify(color));
    // let storedCOlors = JSON.parse(localStorage.getItem("colors"));
    // console.log(storedCOlors)

    // historyItems.forEach(function (item) {
    //     console.log(item);
    // });

    console.log(inputAmoutArray);
    console.log(inputTextArray)

}


// Update the income based on user input
function updateIncome(e) {
    e.preventDefault();
    inputAmount = Number(amount.value);
    localStorage.setItem("InputAmout", inputAmount);

    if (inputAmount > 0) {
        currentIncome = currentIncome + inputAmount;
        income.innerHTML = `<div>$${formatMoney(currentIncome)}</div>`;
        updateBalance();
        updateHistory();
    } else {

        currentExpense = currentExpense + inputAmount;
        expense.innerHTML = `<div>-$${formatMoney(currentExpense) * -1}</div>`;
        updateBalance();
        updateHistory();
    }
    deleteUpdate()

    historyData()

}

//Format money
function formatMoney(money) {
    return money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}

// Event listener to check any transaction added
addTrasactionBtn.addEventListener('click', updateIncome);


