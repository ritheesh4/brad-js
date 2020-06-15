// document.getElementsByClassName

// const items = document.getElementsByClassName ('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'hello'; 

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//documnet.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// // console.log(lis[0]);
// lis[0].style.color='red';
// lis[3].textContent = 'hello';

// // Convert HTML collection into array
// lis = Array.from(lis);
// lis.reverse();
// console.log(lis);

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function (items, index) {
    // console.log(li.className);
    // li.textContent = `${index}:Hello `;
    items.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = '#ccc'
}
)

for (i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'red';
}
console.log(items);s