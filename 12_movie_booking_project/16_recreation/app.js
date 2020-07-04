// sectionList(Number of sections, number of rows in a sectionList, number of seats in a row)
seatArrangement(4, 2, 20);
let seatSelectionLimit = 3;
let seatSelectedCount = 0;

// Checking wether any seat clicked or not
Array.from(seats).forEach(function (element) {
    element.addEventListener('click', function () {
        setaSelected(element.id);

    });
});

// Assing colour to selected seats
function setaSelected(id) {
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
            document.getElementById(id).style.background = 'red';
            seatPrice(id);
        }

    }

}


// section seat prices
function seatPrice(id) {
    console.log("seats count", seatSelectedCount);
    console.log(`${seatSelectedCount * 20}$`);
    document.querySelector('.amount-box').innerHTML = `
    <div>${seatSelectedCount * 20}$</div>
    <div>Seats count: ${seatSelectedCount}</div>`
}
