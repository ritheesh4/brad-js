// async function myFunc() {

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello', 1000));
//     });

//     const error = true;
//     if(!error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }

//     const res = await promise;
//     return res;
// }

// myFunc()
//     .then(res => console.log(res));


async function getUsers () {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // ONly proceed once second promise is resolved
    return data;
}


getUsers().then(users => console.log(users));