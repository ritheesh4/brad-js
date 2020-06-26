const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//     if (err) {
//         console.log(errr);
//     } else {
//         console.log(posts);
//     }

// });

// Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
//     if (err) {
//         console.log(errr);
//     } else {
//         console.log(posts);
//     }

// });



// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(errr);
//     } else {
//         console.log(post);
//     }

// });


// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, post) {
//     if (err) {
//         console.log(errr);
//     } else {
//         console.log(post);
//     }
// });



http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, reponse) {
    if (err) {
        console.log(errr);
    } else {
        console.log(reponse);
    }

});