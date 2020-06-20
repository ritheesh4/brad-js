// // document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);

// // Change styling
// // document.getElementById('task-title').style.background = '#333';
// // document.getElementById('task-title').style.color="Red";
// // document.getElementById('tesk-title').style.padding ="10px";
// // document.getElementById('task-title').style.display = 'none';

// //Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style ="color:red"> Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color ='red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color ='red';

document.querySelector('li:nth-child(3)').style.color='orange';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background ="black";
document.querySelector('li:nth-child(even)').style.background="red";


