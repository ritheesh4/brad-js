const keyboard = document.getElementById('keyboard');
const tapBtn = document.getElementById('tap-button');
const selectedRw = document.getElementsByClassName('selecting');
const selectingKey = document.getElementsByClassName('selecting-key');
const textBox = document.getElementById('text-box');


let timeouts = [];
let tap = 0;

//Tap function
const taped = () => {
    if (tap === 0) {
        rotatingSection();
        tap++;
    } else {
        if (tap === 1) {
            console.log(tap)
            clearAllTimeouts();
            horizontalSelection();
            tap++;
        } else {
            console.log("key selected");
            keySelected();
            clearAllTimeouts();
            horizontalSelection();
        }
    }
}

// Rotating vertical selection;
const rotatingSection = () => {
    let keyRow = [].slice.call(keyboard.children);

    addClass(keyRow);
    let verticalSelection = setInterval(() => addClass(keyRow), 6000);
    setTimeout(() => { clearInterval(verticalSelection); tap = 0; }, 13000);
}

// Add and remove the color to the selected row
const addClass = (keyRow, keyState) => {

    if (keyState) {
        keyRow.forEach(function (element, index) {
            setTimeout(function () {
                element.classList.add("selecting-key");
                setTimeout(function () {
                    element.classList.remove("selecting-key");
                }, 500);
            }, index * 1000);
        });
    } else {
        keyRow.forEach(function (element, index) {
            setTimeout(function () {
                element.classList.add("selecting");
                setTimeout(function () {
                    element.classList.remove("selecting");
                }, 500);
            }, index * 1000);
        });
    }

}

// Horizontal selection for keys
const horizontalSelection = () => {

    let selectedRow = [].slice.call(selectedRw[0].children);
    let keyState = true;
    addClass(selectedRow, keyState);

    let horizontal = setInterval(() => addClass(selectedRow, keyState), 12000);
    setTimeout(() => { clearInterval(horizontal); }, 25000);
}


// Clear all timeouts
const clearAllTimeouts = () => {
    let highestTimeoutId = setTimeout(";");

    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

//Capture the selected key
const keySelected = () => {
    textBox.querySelector('p').innerHTML += `${selectingKey[0].innerHTML}`;
    
}


// Detect when tapped
tapBtn.addEventListener('click', taped);