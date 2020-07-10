const addUser = document.getElementById('addUser');
const doubleMoney = document.getElementById('doubleMoney');
const millionaires = document.getElementById('millionaires');
const sortRich = document.getElementById('sortRich');
const wealth = document.getElementById('wealth');
const userList = document.getElementById('userData')
const eachUser = document.getElementById('userData').querySelectorAll('li');


// Update person and welath
async function updateUser(e) {
    e.preventDefault();
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const userData = data.results[0];
    let cash = Math.floor(Math.random() * 1000000);

    userList.innerHTML += `
    <li class = "user">
    <div class="name">${userData.name.first} ${userData.name.last}</div>
    <div class="wealth">${formatMoney(cash)}</div>
    </li>
    `
}

// Double persons money
const doublingMoney = (e) => {
    e.preventDefault();
    eachUser.forEach(function(element){
        console.log(element)
    });
    console.log("money doubled");
}

// Show the millionaires only
const showMillionaires = (e) => {
    e.preventDefault();
    console.log("Showed millionaires");
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


