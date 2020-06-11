// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe')  {
    // if(typeof firstName === 'undefined'){firstName = 'Jone'}
    // if(typeof lastName === 'undefined'){lastName = 'Joseph'}
    // console.log('hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function (x = 4) {
    return x*x;
};

// console.log(square());

// IMMIDIEATLEY INVOKABLE FUCNTION EXPRESSIONS =IIFEs


// (function (){
//     console.log('LIFE Ran..');
// })();

// (function (name){
//     console.log('Hello ' + name);
// })('Brad');


// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    eidt: function(id){
        console.log(`Edit to do ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo.....');
}

todo.add();
todo.eidt(20);
todo.delete();