// sectionList(Number of sections, number of rows in a sectionList, number of seats in a row)
seatArrangement(4, 2, 20);
let seatSelectionLimit = 3;
let seatSelectedCount = 0;
let seatNumbers = [];
let ticketPrice = [];

// Checking wether any seat clicked or not
Array.from(seats).forEach(function (element) {
    element.addEventListener('click', function () {
        setaSelected(element.id, element);
        // console.log(element)

    });
});

// Assing colour to selected seats
function setaSelected(id, element) {
    if (document.getElementById(id).style.background === 'red') {
        console.log("seats count", seatSelectedCount);
        seatSelectedCount--;

        document.getElementById(id).style.background = 'green';
        seatPrice(id);

    } else {

        if (seatSelectedCount === seatSelectionLimit) {
            alert('Sorry!!..You have reached the limit')
        } else {
            seatSelectedCount++;
            seatNumbers += element.id;
            console.log(seatNumbers)
            console.log(seatNumbers[seatNumbers.length - 1])
            document.getElementById(id).style.background = 'red';
            seatPrice(id);
        }

    }

}


function loadFilm(e) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'moviesList.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            for(let arryaIndex=0; arryaIndex< data.length; arryaIndex++){
                ticketPrice.push(data.ticket)
            }
            console.log(data.length)
            data.forEach(element => {
                document.getElementById('movie').innerHTML += `<option>${element.movie} ${element.ticket}$</option>`
            });
        }
    }
    xhr.send();
}



loadFilm();
console.log(ticketPrice)

document.getElementById('movie').addEventListener('click', selectedMovie)
function selectedMovie() {
    let movieIndex = document.getElementById('movie').selectedIndex;
    console.log(movieIndex);
    
}

function ticketPriceUpdate() {

}


// section seat prices
function seatPrice(id) {
    document.querySelector('.amount-box').innerHTML = `
    <div>${seatSelectedCount * 20}$</div>
    <div>Seats count: ${seatSelectedCount}</div>`
}

