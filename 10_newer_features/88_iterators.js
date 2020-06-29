// Iterator exmaple
function nameIterator(names) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: true }
        }
    }
}

// Create an array of naems
const namesArr = ['Jack', 'Jill', 'John'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);
console.log(names.next());