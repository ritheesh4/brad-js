let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get child nodes
valsecond = list.childNodes;
val = list.childNodes[0];
valfirst = list.childNodes[1].nodeName;
val = list.childNodes[5].nodeType;


// 1 - Element
// 2- Attributed (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



// Get children element nodes
val = list.children;
 
// console.log(val);
// console.log(valfirst);
// console.log(valsecond);

val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children[0].id = 'test-link';

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

console.log(val);



