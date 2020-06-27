// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if (userText !== '') {
        // console.log(userText);
        // Make http call
        github.getUser(userText)
        .then(data => { console.log(data);
            if( data.profile.message === 'Not Found'){
                // Show alert
                console.log("user not found")
                ui.showAlert('User not found',  'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
})