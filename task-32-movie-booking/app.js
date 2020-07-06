const seatContainer = document.querySelector('.seat-container');// The container which has all seats
const movieList = document.getElementById('movie');// list of movies
let ticket = movieList.value; // ticket price
const seats = document.querySelectorAll('.row .seat:not(.booked)'); // seats not booked yet
updateUI()

//Checking wether any seat has selected or not
seatContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        e.target.classList.toggle('selected');
        countOfseats()
    }
});

// Update ui based on local storage
function updateUI() {
    
    //updating seats
    const seatsSelected = JSON.parse(localStorage.getItem('seatsSelected'));
    console.log(seatsSelected)
    if (seatsSelected  !== null && seatsSelected .length > 0) {
        seats.forEach((seat, index) => {
            if (seatsSelected .indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        });
    }

    // Updating moive lis dropdown
    const currentMovie = localStorage.getItem('movieIndex');
    if (currentMovie !== null) {
        movieList.selectedIndex = currentMovie;
    }
}


// Dropdown current data to local storage
function movieDropDown(movieIndex, moviePrice) {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
}


//Calculating the price based on number of seats and current movie
function countOfseats() {
    const selectedList = document.querySelectorAll('.row .seat.selected');
    const selectedSeatIndex = [...selectedList].map(seat => [...seats].indexOf(seat));
    console.log("index of seat", selectedSeatIndex)
    localStorage.setItem('seatsSelected', JSON.stringify(selectedSeatIndex));
    document.getElementById('count').innerHTML = selectedList.length;
    document.getElementById('total').innerHTML = selectedList.length * ticket;
}


// Checking wether pick a movie changed or not
movieList.addEventListener('change', function (e) {
    movieDropDown(e.target.selectedIndex, e.target.value);
    ticket = +e.target.value;
    countOfseats();
});