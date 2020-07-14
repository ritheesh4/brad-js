const keyboard = document.getElementById('keyboard');
const tapBtn = document.getElementById('tap-button');
const selectedRow = document.getElementsByClassName('selecting');

let timeouts = [];
let tap = 0;

//Tap function
function taped() {
    tap++;
    if (tap > 1) {

    } else {
        rotatingSection()
    }
}

// Rotating vertical selection;
function rotatingSection() {
    let keyRow = [].slice.call(keyboard.children);
    
    addClass(keyRow);
    let verticalSelection = setInterval(() => addClass(keyRow), 6000);
    setTimeout(() => { clearInterval(verticalSelection); tap = 0; }, 9000);
}

// Add and remove the color to the selected row
function addClass(keyRow) {
    keyRow.forEach(function (element, index) {
        setTimeout(function () {
            element.classList.add("selecting");
            setTimeout(function () {
                element.classList.remove("selecting");
            }, 500)

        }, index * 1000);
    });
}


tapBtn.addEventListener('click', taped);