const keyboard = document.getElementById('keyboard');
const tapBtn = document.getElementById('tap-button');
const selectedRw = document.getElementsByClassName('selecting');
const selectingKey = document.getElementsByClassName('selecting-key');
const textBox = document.getElementById('text-box');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const enterBtn = document.querySelector('#enter');

let timeouts = [];
let tap = 0;

// Tap function
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
        try {
            keyRow.forEach(function (element, index) {
                setTimeout(function () {
                    element.classList.add("selecting-key");
                    setTimeout(function () {
                        element.classList.remove("selecting-key");
                    }, 500);
                }, index * 1000);
            });
        }
        catch (err) {
            console.log("Error while adding or removing class on the key")
        }
    } else {
        try {
            keyRow.forEach(function (element, index) {
                setTimeout(function () {
                    element.classList.add("selecting");
                    setTimeout(function () {
                        element.classList.remove("selecting");
                    }, 500);
                }, index * 1000);
            });
        } catch{
            console.log("Error while adding or removing class in the row")
        }
    }
}

// Horizontal selection for keys
const horizontalSelection = () => {
    try {
        let selectedRow = [].slice.call(selectedRw[0].children);
        let keyState = true;
        addClass(selectedRow, keyState);

        let horizontal = setInterval(() => addClass(selectedRow, keyState), 12000);
        setTimeout(() => { clearInterval(horizontal); }, 37000);
    } catch {
        console.log("error in the horizontal selection function")
    }
}


// Clear all timeouts
const clearAllTimeouts = () => {
    let highestTimeoutId = setTimeout(";");

    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

// Capture the selected key
const keySelected = () => {
    // console.log(selectingKey[0].getAttribute('id'));

    if (selectingKey[0].getAttribute('id') == 'up') {
        try {
            let element = selectedRw[0].previousElementSibling;
            selectingKey[0].classList.remove("selecting-key");
            selectedRw[0].classList.remove("selecting")
            element.classList.add("selecting");
            horizontalSelection()
        }
        catch {
            console.log("end reached");
        }


    } else if (selectingKey[0].getAttribute('id') == 'down') {
        try {
            let element = selectedRw[0].nextElementSibling;
            selectingKey[0].classList.remove("selecting-key");
            selectedRw[0].classList.remove("selecting")
            element.classList.add("selecting");
            horizontalSelection()
        }
        catch {
            console.log("end reached");
        }





    } else if (selectingKey[0].getAttribute('id') == 'enter') {
        textBox.querySelector('p').innerHTML += `<br>`;
        selectingKey[0].classList.remove("selecting-key");

    } else {
        textBox.querySelector('p').innerHTML += `${selectingKey[0].innerHTML}`;
        selectingKey[0].classList.remove("selecting-key");
    }
}

// Jump to the top row 
const jumpUpward = () => {
    console.log("up button clicked")
}

// Detect when tapped on the button
tapBtn.addEventListener('click', taped);

// Detect when tapped on the screen
// document.addEventListener("click", taped);
