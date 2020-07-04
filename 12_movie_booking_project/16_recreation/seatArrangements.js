const seats = document.getElementsByClassName('seat');

// Set up sections
function seatArrangement(sectionLimit, rowLimit, setsLimit) {
    for (let columnNumber = 0; columnNumber < sectionLimit; columnNumber++) {
        document.querySelector('main').innerHTML += `
    <div class =column-${columnNumber}>
    </div>`
        seatList(columnNumber, rowLimit, setsLimit);
        document.querySelector(`.column-${columnNumber}`).innerHTML += `<div>Section -${String.fromCharCode(65 + columnNumber)} </div>`
    }

}

// Set up number of rows
function seatList(sectionNumber, rowLimit, seatsLimit) {
    let name = String.fromCharCode(65 + sectionNumber);

    for (let i = 0; i < rowLimit; i++) {
        document.querySelector(`.column-${sectionNumber}`).innerHTML += `
        <div class="row" id=row${name}${i}>
        <div `;
        addSeats(i, name, `row${name}${i}`, seatsLimit);
    }
}


// Set up number of seats in a row
function addSeats(i, name, rowName, seatsLimit) {
    for (let j = 0; j < seatsLimit; j++) {
        document.getElementById(`row${name}${i}`).innerHTML += `
        <div class="seat" id=${rowName}S${j}></div>`;
    }
}



