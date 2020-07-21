/* Here we have a tapping option to select the keys. First tap will activate the keyboard and will rotate 
 vertically and will wait for user input to select which row that user wishes to get enter. Second tap
 is considered as the user has selected a row and the selection from there will be for the keys. Next tap will
 for the user to select which key or which option in that row to execute.*/

/*Features
------------
1. Single tap keyboard functions can be performed.
2. Selection time for row and seletcion time for keys are customizable. Row or vertical selection time can be set by changing the value 
   of the variable "verticalSelectionTime" in seconds. The key slection time can be set by changing the value of the variable "keySelectionTime" in seconds.
3. If the user is not active for about a particular limit of time, the selection will go into the idle state. When user clicked back, it will  
   continue like before. This time of inactivity is also cusomizable by changing the variable value "inactivityTimeLimit" in seconds.
4. Keys will be in uppercase mode until first key is pressed.
5. Uppercase mode will get activated when '.' and space added. It will be considered as a next sentence.
6. Multiple clicks possible on single keys.
 */

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
const textBoxSection = document.getElementById('inputTextArea');

let timeouts = [];
let maxVerticalRotation = 3;  // Enter how many times the vertical selection rotation need to execute.
let maxHorizontalRotation = 3;  // Enter how many times the horizontal selection rotation need to execute.
let tap = 0;
let nav = 'up';
let previousTap = 0;
let capsLockFlag = false;
let endSentenceFlag = false;
let directionLfFlag;
let clickActivated = false;
let croppedELements;
let verticalSelectionTime = 1;  // Enter the selection time in seconds to select rows.
let keySelectionTime = 1;  // Enter the selection time in seconds to select keys.
let inactivityTimeLimit = 300; // Enter the inactivity time limit in seconds.
let checkingInactivity;
// Tap function enables row selection of the keyboard. 

// Checking the user is active or not for a long time
const checkInactivityStatus = () => {
    clearInterval(checkingInactivity);
    checkingInactivity = setInterval(() => nonReseponsiveStop(), (inactivityTimeLimit * 1000));
}

const taped = () => {
    if (tap === 0) {
        checkInactivityStatus();
        setCursorPosition();
        rotatingSection();  // Trigers the vertical selection.
        tap++;
        previousTap = tap;
    } else {
        if (tap === 1) {
            setCursorPosition();
            clearAllTimeouts();
            checkInactivityStatus();
            horizontalSelection();  // Trigers the horizontal selection. 
            tap++;
            previousTap = tap;
        } else if (tap === 2) {
            checkInactivityStatus();
            tap++;
            keySelected();  // Executes the corresponding action for the selected key.
            changeLetterCase(capsLockFlag);
            previousTap = tap;
        } else {
            checkInactivityStatus();
            tap++;
            keySelected();
            previousTap = tap;
        }
    }
    tapBtn.style.backgroundColor = "hsl(98, 100%, 55%)";
    tapBtn.style.color = "white";

    setTimeout(() => {
        tapBtn.style.border = "2px solid hsl(98, 100%, 55%)";
        tapBtn.style.backgroundColor = "transparent";
        tapBtn.style.color = "rgb(126, 125, 125)";
    }, 500);
    checkEndSentence();
}

// Rotating vertical selection.
const rotatingSection = () => {
    let keyRow = [].slice.call(keyboard.children);
    addSelectionClass(keyRow);
    let verticalSelection = setInterval(() => addSelectionClass(keyRow), (verticalSelectionTime * 6000));
}

// Horizontal selection for keys.
const horizontalSelection = () => {
    try {
        selectingKey[0].classList.remove("selected-color");
    } catch (err) { };
    try {
        let selectedRow = [].slice.call(selectedRw[0].children);
        let keyState = true;
        addSelectionClass(selectedRow, keyState);
        let horizontal = setInterval(() => addSelectionClass(selectedRow, keyState), (keySelectionTime * 12000));
    } catch (err) { };
}

// Add and remove the color to the selected row
const addSelectionClass = (keyRow, keyState, clickActivated) => {
    if (keyState) {
        // Responsible for selection of keys
        if (nav === 'down') {
            try {
                keyRow.reverse();
                setTimeout(() => {
                    let copyOfSelectedROw = [].slice.call(selectedRw[0].children);
                    if (keyRow[0] === copyOfSelectedROw[0]) {
                        directionLfFlag = true;
                    } else {
                        directionLfFlag = false;
                    }
                }, 1000)
                keyRow.forEach((element, index) => {
                    downTimeout1 = setTimeout(() => {
                        element.classList.add("selecting-key");
                        downTimeout2 = setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                });
            }
            catch (err) { };
        } else if (nav === 'up') {
            try {
                setTimeout(() => {
                    let copyOfSelectedROw = [].slice.call(selectedRw[0].children);
                    if (keyRow[0] === copyOfSelectedROw[0]) {
                        directionLfFlag = false;
                    } else {
                        directionLfFlag = true;
                    }
                }, 1000)
                // clickActivated = false;

                keyRow.forEach((element, index) => {
                    upTimeout1 = setTimeout(() => {
                        element.classList.add("selecting-key");
                        upTimeout2 = setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                }); keyRow.reverse();
            }
            catch (err) { };
        } else {
            try {
                setTimeout(() => {
                    let copyOfSelectedROw = [].slice.call(selectedRw[0].children);
                    if (keyRow[0] === copyOfSelectedROw[0]) {
                        directionLfFlag = false;
                    } else {
                        directionLfFlag = true;
                    }

                }, 1000)
                keyRow.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("selecting-key");
                        setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                }); keyRow.reverse();
            }
            catch (err) { };
        }
    } else {  // Responsible for selection of rows. Horizontal selection.
        try {
            keyRow.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add("selecting");
                    setTimeout(() => {
                        element.classList.remove("selected-color");
                        element.classList.remove("selecting");
                    }, 1000 * verticalSelectionTime);
                }, index * 1000 * verticalSelectionTime);
            });
        } catch (err) { };
    }
}

// Reseting all the timers.
const clearAllTimeouts = () => {
    let highestTimeoutId = setTimeout(";");
    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
}

// Capture the selected key from the row.
const keySelected = () => {
    try {
        selectingKey[0].classList.add("selected-color");
    } catch{ };
    try {
        switch (selectingKey[0].getAttribute('id')) {
            case 'up':
                try {
                    let element = selectedRw[0].previousElementSibling;
                    if (element) {
                        switchSelection(element);
                        nav = 'up';
                        horizontalSelection();
                    } else {
                        let element = selectedRw[0].parentElement.lastElementChild;
                        switchSelection(element);
                        nav = 'up';
                        horizontalSelection();
                    }
                }
                catch { };
                clearAllTimeouts();
                horizontalSelection();
                break;
            case 'down':
                try {
                    let element = selectedRw[0].nextElementSibling;
                    if (element) {
                        switchSelection(element);
                        nav = 'down';
                        horizontalSelection();
                    } else {
                        let element = selectedRw[0].parentElement.firstElementChild;
                        switchSelection(element);
                        nav = 'down';
                        horizontalSelection();
                    }
                }
                catch { }
                clearAllTimeouts();
                horizontalSelection();
                break;
            case 'enter':
                textBox.querySelector('textarea').innerHTML += `\r\n`;
                clearAllTimeouts();
                multiClick(selectingKey[0]);

                break;
            case 'space':
                textBox.querySelector('textarea').innerHTML += ` `;
                clearAllTimeouts();
                multiClick(selectingKey[0]);
                break;
            case 'delete':
                textBox.querySelector('textarea').innerHTML = textBox.querySelector('textarea').innerHTML.replace(/.$/, '');
                clearAllTimeouts();
                multiClick(selectingKey[0]);


                break;
            case 'smallLetter':
                capsLockFlag = !capsLockFlag
                changeLetterCase(capsLockFlag);
                if (capsLockFlag) {
                    selectingKey[0].classList.add("caseChange");
                } else {
                    selectingKey[0].classList.remove("caseChange");
                }
                removeKeySelection();
                break;
            default:
                textBox.querySelector('textarea').innerHTML += `${selectingKey[0].innerHTML}`;
                clearAllTimeouts();
                multiClick(selectingKey[0]);
        }
        setCursorPosition();
    }
    catch (err) { };
}

// Up and Down removing current selection and add new selection to the navigated row.
const switchSelection = (element) => {
    selectingKey[0].classList.remove("selected-color");
    selectingKey[0].classList.remove("selecting-key");
    selectedRw[0].classList.remove("selecting");
    element.classList.add("selecting");
}

//Remove the current key selection aftet detection.
const removeKeySelection = () => {
    selectingKey[0].classList.remove("selecting-key");
}

//Multi click function
const multiClick = (element) => {
    let parentElem = element.parentElement;
    let indexClicked = Array.prototype.indexOf.call(parentElem.children, element);
    let currentRow = [].slice.call(parentElem.children);

    setTimeout(() => {
        element.classList.remove("selected-color");
        element.classList.remove("selecting-key");
        updateSelectionMulticlick(indexClicked, parentElem, currentRow)
    }, 1000 * keySelectionTime);
    clickActivated = true;
}

// The position and the selection after multiple times a key has been clicked
const updateSelectionMulticlick = (indexClicked, parentElem, currentRow) => {
    try {
        if (nav === 'up') {
            if (directionLfFlag === true) {
                croppedELements = currentRow.slice(indexClicked + 1, parentElem.length);
                croppedELements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("selecting-key");
                        setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                            if (element.id === 'down') {
                                nav = 'down';
                                horizontalSelection();
                            }
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                });
            }
        } else if (nav === 'down') {
            if (directionLfFlag === false) {
                currentRow;
                croppedELements = currentRow.slice(0, indexClicked);
                croppedELements.reverse()
                croppedELements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("selecting-key");
                        setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                            if (element.id === 'up') {
                                nav = 'up';
                                horizontalSelection();
                            }
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                });
            }
        } if (nav === 'up') {
            if (directionLfFlag === false) {
                croppedELements = currentRow.slice(0, indexClicked + 1);
                croppedELements.reverse()
                croppedELements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("selecting-key");
                        setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                            if (element.id === 'up') {
                                nav = 'up';
                                horizontalSelection();                            }
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                });
            }
        } else if (nav === 'down') {
            if (directionLfFlag === true) {
                currentRow;
                croppedELements = currentRow.slice(indexClicked + 1, parentElem.length);
                croppedELements.reverse()
                croppedELements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("selecting-key");
                        setTimeout(() => {
                            element.classList.remove("selected-color");
                            element.classList.remove("selecting-key");
                            if (element.id === 'down') {
                                nav = 'down';
                                horizontalSelection();
                            }
                        }, 1000 * keySelectionTime);
                    }, index * 1000 * keySelectionTime);
                });
            }
        }
    }
    catch (err) { };
}

// Change the case of the letter.
const changeLetterCase = (capsLockFlag) => {
    let result = selectedRw[0].parentElement;
    let rowParent = [].slice.call(result.children);
    rowParent.forEach((ul) => {
        let result = [].slice.call(ul.children);
        result.forEach((li) => {
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

// Set the blinking cursor position to the end
const setCursorPosition = () => {
    textBoxSection.focus();
    textBoxSection.setSelectionRange(textBoxSection.value.length, textBoxSection.value.length);
    textBoxSection.scrollTop = textBoxSection.scrollHeight - textBoxSection.clientHeight;
}

// Check If user input is dot and space then the keyboard changes to uppercase.
const checkEndSentence = () => {
    try {
        let textBoxContentLength = textBoxSection.value.length;
        let textBoxContent = textBoxSection.value;
        let lastTwoChar = textBoxContent.slice(textBoxContentLength - 2, textBoxContentLength);
        if (tap > 2) {
            if (!capsLockFlag || (endSentenceFlag === true)) {
                if (lastTwoChar === '. ') {
                    capsLockFlag = true;
                    changeLetterCase(capsLockFlag);
                    endSentenceFlag = true;
                } else {
                    capsLockFlag = false;
                    endSentenceFlag = false;
                    changeLetterCase(capsLockFlag);
                }
            }
        }
    } catch{ };
}

// Stoping the selection user is not available for a particualr time.
const nonReseponsiveStop = () => {
    clearAllTimeouts();
    if (tap === 1) {
        selectedRw[0].classList.remove("selecting");
    } else {
        selectingKey[0].classList.remove("selected-color");
        selectingKey[0].classList.remove("selecting-key");
        selectedRw[0].classList.remove("selecting");
    }
    tap = 0;
}

// Detect when tapped on the screen
document.addEventListener("click", taped);

