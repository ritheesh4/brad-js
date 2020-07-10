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
}

// Show the millionaires only
const showMillionaires = (e) => {
    e.preventDefault();
    console.log("Showed millionaires");
    indexOfMillionaires = 0;

    doubleArray.forEach(function (element, index) {
        if (element / 1000000 >= 1) {
            console.log(element, index);
            millionairesWealth[indexOfMillionaires] = doubleArray[index];
            millionairesName[indexOfMillionaires] = userArray[index];
            indexOfMillionaires++;
        } else {

        }
    });

    console.log(millionairesName, millionairesWealth)
    eachUser = document.getElementById('userData').querySelectorAll('li');
    userList.innerHTML = '';
    e.preventDefault();
    millionairesName.forEach(function (element, index) {
        console.log(index)
        userList.innerHTML += `
    <li class = "user">
    <div class="name">${millionairesName[index].name.first} ${userArray[index].name.last}</div>
    <div class="wealth">${formatMoney(millionairesWealth[index])}</div>
    </li>    `
    });
}



// Sort rich first
const sortRichFirst = (e) => {
    e.preventDefault();
    console.log("sorted");
}

// Calculate the entire wealth
const showEntireWealth = (e) => {
    e.preventDefault();
    console.log("showed entire wealth");
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


