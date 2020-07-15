const keyboard = document.getElementById('keyboard');
const tapBtn = document.getElementById('tap-button');
const selectedRw = document.getElementsByClassName('selecting');
const selectingKey = document.getElementsByClassName('selecting-key');
const textBox = document.getElementById('text-box');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const enterBtn = document.querySelector('#enter');
const spaceBtn = document.querySelector('#space');
const smallLetterBtn = document.querySelector('#smallLetter');

let timeouts = [];
let tap = 0;
let smallLetterFlag = 0;
let verticalSelectionTime = 6000;
let horizontalSelectionTime = 12000;

// Tap function
const taped = () => {

    if (tap === 0) {
        rotatingSection();
        tap++;
    } else {
        if (tap === 1) {
            clearAllTimeouts();
            horizontalSelection();
            tap++;
        } else {
            keySelected();

        }
    }
    tapBtn.style.backgroundColor = "red";
    tapBtn.style.color = "white";
    setTimeout(() => { tapBtn.style.backgroundColor = "rgb(113, 212, 113)"; tapBtn.style.color = "black"; }, 500)
}

// Rotating vertical selection;
const rotatingSection = () => {
    let keyRow = [].slice.call(keyboard.children);

    addClass(keyRow);
    let verticalSelection = setInterval(() => addClass(keyRow), 6000);
    // setTimeout(() => { clearInterval(verticalSelection); tap = 0; }, 13000);
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
                    }, 1000);
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
                    }, 1000);
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

        let horizontal = setInterval(() => addClass(selectedRow, keyState), horizontalSelectionTime);
        // setTimeout(() => { clearInterval(horizontal); }, 37000);
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
    try {
        switch (selectingKey[0].getAttribute('id')) {
            case 'up':
                try {
                    let element = selectedRw[0].previousElementSibling;
                    if (element) {
                        selectingKey[0].classList.remove("selecting-key");
                        selectedRw[0].classList.remove("selecting")
                        element.classList.add("selecting");
                        horizontalSelection()
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
                        selectingKey[0].classList.remove("selecting-key");
                        selectedRw[0].classList.remove("selecting")
                        element.classList.add("selecting");
                        horizontalSelection()
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
                smallLetterFlag = !smallLetterFlag
                changeLetterCase(smallLetterFlag);
                if (smallLetterFlag) {
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
    catch {
        console.log("error to get id attribute")
    }
}

// Change the case of the letter
const changeLetterCase = (smallLetterFlag) => {
    let result = selectedRw[0].parentElement;
    let rowParent = [].slice.call(result.children);

    rowParent.forEach(function (ul) {
        let result = [].slice.call(ul.children);
        result.forEach(function (li) {
            if (li.innerHTML.substring(0, 1) !== '<') {
                if (li.innerHTML.toUpperCase() != li.innerHTML.toLowerCase()) {
                    if (smallLetterFlag) {
                        li.innerHTML = `${li.innerHTML.toLowerCase()}`
                    } else {
                        li.innerHTML = `${li.innerHTML.toUpperCase()}`
                    }
                }
            }
        });
    });
}



// Detect when tapped on the button
// tapBtn.addEventListener('click', taped);

// Detect when tapped on the screen
document.addEventListener("click", taped);
