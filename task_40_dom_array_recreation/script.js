const addUser = document.getElementById('addUser');
const doubleMoney = document.getElementById('doubleMoney');
const millionaires = document.getElementById('millionaires');
const sortRich = document.getElementById('sortRich');
const wealth = document.getElementById('wealth');
const userList = document.getElementById('userData');
let user = document.getElementsByClassName('user')
let eachUser = document.getElementById('userData').querySelectorAll('li');

let userArray = [];
let cashArray = [];
let doubleArray = [];
let millionairesName = [];
let millionairesWealth = [];

// Update person and welath
async function updateUser(e) {
    e.preventDefault();
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const userData = data.results[0];
    userArray.push(userData);
    let cash = Math.floor(Math.random() * 1000000);
    cashArray.push(cash);

    userList.innerHTML += `
    <li class = "user">
    <div class="name">${userData.name.first} ${userData.name.last}</div>
    <div class="wealth">${formatMoney(cash)}</div>
    </li>
    `
    doubleArray = [...cashArray];
}

// Double persons money
const doublingMoney = (e) => {
    eachUser = document.getElementById('userData').querySelectorAll('li');
    userList.innerHTML = '';
    e.preventDefault();
    eachUser.forEach(function (element, index) {
        userList.innerHTML += `
    <li class = "user">
    <div class="name">${userArray[index].name.first} ${userArray[index].name.last}</div>
    <div class="wealth">${formatMoney(doubleArray[index] * 2)}</div>
    </li>    `
        doubleArray[index] = doubleArray[index] * 2;
    });

    cashArray = [...doubleArray];
}

// Show the millionaires only
const showMillionaires = (e) => {
    e.preventDefault();

    indexOfMillionaires = 0;
    doubleArray.forEach(function (element, index) {
        if (element / 1000000 >= 1) {

            millionairesWealth[indexOfMillionaires] = doubleArray[index];
            millionairesName[indexOfMillionaires] = userArray[index];
            indexOfMillionaires++;
        } else {

        }
    });

    eachUser = document.getElementById('userData').querySelectorAll('li');
    userList.innerHTML = '';
    e.preventDefault();
    millionairesName.forEach(function (element, index) {

        userList.innerHTML += `
    <li class = "user">
    <div class="name">${millionairesName[index].name.first} ${userArray[index].name.last}</div>
    <div class="wealth">${formatMoney(millionairesWealth[index])}</div>
    </li>    `
    });

    userArray = [...millionairesName];
    cashArray = [...millionairesWealth];
}



// Sort rich first
const sortRichFirst = (e) => {
    e.preventDefault();
    let arrayToSort = [];
    for (let i = 0; i < userArray.length; i++) {
        const user = {
            name: `${userArray[i].name.first} ${userArray[i].name.last}`,
            money: cashArray[i]
        };
        arrayToSort[i] = user
    }

    arrayToSort.sort((first, second) => second.money - first.money);
    userList.innerHTML = ''
    arrayToSort.forEach((item => {
        userList.innerHTML += `
        <li class = "user">
        <div class="name">${item.name}</div>
        <div class="wealth">${formatMoney(item.money)}</div>
        </li>
        `
    }))
}

// Calculate the entire wealth
const showEntireWealth = (e) => {
    e.preventDefault();

    let sum = 0;
    cashArray.forEach(function (element) {
        sum = sum + element;
    });
    userList.innerHTML += `
    <li class="total-wealth">
        <div style="flex: 1;">Total Wealth:</div>
        <div>${formatMoney(sum)}</div>
    </li>
    `
}

// Format the randomly generated value in to money
const formatMoney = (number) => {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}

addUser.addEventListener('click', updateUser);
doubleMoney.addEventListener('click', doublingMoney);
millionaires.addEventListener('click', showMillionaires);
sortRich.addEventListener('click', sortRichFirst);
wealth.addEventListener('click', showEntireWealth);


