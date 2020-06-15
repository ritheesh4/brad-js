//  document.querySelector('.clear-tasks').addEventListener('click',function(e){
//      console.log('Button clicked');
//     //  e.preventDefault();
//  });
// val = document.querySelector('.clear-tasks');

// let link = document.getElementsByClassName('clear-tasks');
// link[0].href ='#';
// console.log(val);
// val = link.hasHref
// console.log(link[0].href);
document.querySelector('.clear-tasks').addEventListener('click',onclick);

function onclick(e){
//     console.log('clicked');
    let val;
    val = e;

    val = e.target;
    val = e.target.className;
    val = e.target.classList;
    // e.target.innerText ='Hello';

    // Event type
    val = e.type;

    // Time stamp
    val = e.timeStamp;

    //Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);

}