/* Here we have a tapping option to select the keys. First tap will activate the keyboard and will rotate 
 vertically and will wait for user input to select which row that user wishes to get enter. Second tap
 is considered as the user has selected a row and the selection from there will be for the keys. Next tap will
 for the user to select which key or which option in that row to execute.*/
const keyboard = document.getElementById('keyboard');
const tapBtn = document.getElementById('tap-button');
const selectedRw = document.getElementsByClassName('selecting');
const selectingKey = document.getElementsByClassName('selecting-key');
const selectedColorChange = document.getElementsByClassName('selected-color');
const textBox = document.getElementById('text-box');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const enterBtn = document.querySelector('#enter');
const spaceBtn = document.querySelector('#space');
const smallLetterBtn = document.querySelector('#smallLetter');

let timeouts = [];
let maxVerticalRotation = 3; // Enter how many times the vertical selection rotation need to execute
let maxHorizontalRotation = 3; // Enter how many times the horizontal selection rotation need to execute
let tap = 0;
let previousTap = 0;
let capsLockFlag = false;
let selectionTimeConfig = 1; // Enter the selection time in seconds

// Tap function enables row selection of the keyboard. 
const taped = () => {
    if (tap === 0) {
        rotatingSection();  // Trigers the vertical selection
        tap++;
        previousTap = tap;
    } else {
        if (tap === 1) {
            clearAllTimeouts();
            horizontalSelection(); // Trigers the horizontal selection 
            tap++;
            previousTap = tap;
        } else {
            previousTap = tap;
            keySelected(); // Execute the corresponding action for the selected key
        }
    }
    tapBtn.style.backgroundColor = "hsl(98, 100%, 55%)";
    tapBtn.style.color = "white";

    setTimeout(() => {
        tapBtn.style.border = "2px solid hsl(98, 100%, 55%)";
        tapBtn.style.backgroundColor = "transparent";
        tapBtn.style.color = "rgb(126, 125, 125)";
    }, 500);
}

// Rotating vertical selection;
const rotatingSection = () => {
    let keyRow = [].slice.call(keyboard.children);
    addClass(keyRow);
    let verticalSelection = setInterval(() => addClass(keyRow), (selectionTimeConfig * 6000));
    // setTimeout(() => {
    //     if (previousTap === tap) {
    //         clearInterval(verticalSelection);
    //         tap = 0;
    //         previousTap = 0;
    //     }
    // }, (selectionTimeConfig * 5999 * maxVerticalRotation));
}

// Horizontal selection for keys
const horizontalSelection = () => {
    try {
        selectingKey[0].classList.remove("selected-color");
    } catch (err) { };
    try {
        let selectedRow = [].slice.call(selectedRw[0].children);
        let keyState = true;
        addClass(selectedRow, keyState);
        let horizontal = setInterval(() => addClass(selectedRow, keyState), (selectionTimeConfig * 12000));
        // setTimeout(() => {
        //     if (previousTap === tap) {
        //         clearInterval(horizontal);
        //         rotatingSection();
        //     }
        // }, (selectionTimeConfig * 11999 * maxHorizontalRotation));
    } catch (err) { };
}

// Add and remove the color to the selected row
const addClass = (keyRow, keyState) => {
    if (keyState) { // Responsible for selection of keys
        try {
            keyRow.forEach(function (element, index) {
                setTimeout(function () {
                    element.classList.add("selecting-key");
                    setTimeout(function () {
                        element.classList.remove("selected-color");
                        element.classList.remove("selecting-key");
                    }, 1000 * selectionTimeConfig);
                }, index * 1000 * selectionTimeConfig);
            });
        }
        catch (err) { };
    } else {  // Responsible for selection of rows
        try {
            keyRow.forEach(function (element, index) {
                setTimeout(function () {
                    element.classList.add("selecting");
                    setTimeout(function () {
                        element.classList.remove("selected-color");
                        element.classList.remove("selecting");
                    }, 1000 * selectionTimeConfig);
                }, index * 1000 * selectionTimeConfig);
            });
        } catch (err) { };
    }
}

// Clear all timeouts
const clearAllTimeouts = () => {
    let highestTimeoutId = setTimeout(";");
    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

// Capture the selected key from the row
const keySelected = () => {
    selectingKey[0].classList.add("selected-color");
    try {
        switch (selectingKey[0].getAttribute('id')) {
            case 'up':
                try {
                    let element = selectedRw[0].previousElementSibling;
                    if (element) {
                        selectingKey[0].classList.remove("selected-color");
                        selectingKey[0].classList.remove("selecting-key");
                        selectedRw[0].classList.remove("selecting");
                        element.classList.add("selecting");
                        horizontalSelection();
                    } else {
                        let element = selectedRw[0].parentElement.lastElementChild;
                        selectingKey[0].classList.remove("selected-color");
                        selectingKey[0].classList.remove("selecting-key");
                        selectedRw[0].classList.remove("selecting");
                        element.classList.add("selecting");
                        horizontalSelection();
                    }
                }
                catch {
                    console.log("end reached");
                }
                clearAllTimeouts();
                horizontalSelection();
                break;
            case 'down':
                try {
                    let element = selectedRw[0].nextElementSibling;
                    if (element) {
                        selectingKey[0].classList.remove("selected-color");
                        selectingKey[0].classList.remove("selecting-key");
                        selectedRw[0].classList.remove("selecting");
                        element.classList.add("selecting");
                        horizontalSelection()
                    } else {
                        let element = selectedRw[0].parentElement.firstElementChild;
                        selectingKey[0].classList.remove("selected-color");
                        selectingKey[0].classList.remove("selecting-key");
                        selectedRw[0].classList.remove("selecting");
                        element.classList.add("selecting");
                        horizontalSelection();
                    }
                }
                catch {
                    console.log("end reached");
                }
                clearAllTimeouts();
                horizontalSelection();
                break;
            case 'enter':
                textBox.querySelector('span').innerHTML += `<br>`;
                selectingKey[0].classList.remove("selecting-key");
                break;
            case 'space':
                textBox.querySelector('span').innerHTML += `  `;
                selectingKey[0].classList.remove("selecting-key");
                break;
            case 'delete':
                textBox.querySelector('span').innerHTML = textBox.querySelector('span').innerHTML.replace(/.$/, '');
                selectingKey[0].classList.remove("selecting-key");
                break;
            case 'smallLetter':
                capsLockFlag = !capsLockFlag
                changeLetterCase(capsLockFlag);
                if (capsLockFlag) {
                    selectingKey[0].classList.add("caseChange");
                } else {
                    selectingKey[0].classList.remove("caseChange");
                }
                selectingKey[0].classList.remove("selecting-key");
                break;
            default:
                textBox.querySelector('span').innerHTML += `${selectingKey[0].innerHTML}`;
                selectingKey[0].classList.remove("selecting-key");
        }
    }
    catch (err) { }
}

// Change the case of the letter
const changeLetterCase = (capsLockFlag) => {
    let result = selectedRw[0].parentElement;
    let rowParent = [].slice.call(result.children);

    rowParent.forEach(function (ul) {
        let result = [].slice.call(ul.children);
        result.forEach(function (li) {
            if (li.innerHTML.substring(0, 1) !== '<') {
                if (li.innerHTML.toUpperCase() != li.innerHTML.toLowerCase()) {
                    if (capsLockFlag) {
                        li.innerHTML = `${li.innerHTML.toUpperCase()}`;
                    } else {
                        li.innerHTML = `${li.innerHTML.toLowerCase()}`;
                    }
                }
            }
        });
    });
}

// Detect when tapped on the screen
document.addEventListener("click", taped);

