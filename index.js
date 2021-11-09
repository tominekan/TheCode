let i = 0;
let txt = 'Nice project you got there bro, sweeet!'; // Not sure what we want here, but this the first text shown
let speed = 50; // Milliseconds, increase to slow it down
let secret_value_1 = "supersecret" // We can put whatever we want here

// Does a nice printing animation that hides a text box
function typeTextOut() {
    let big_text = document.getElementById("slogan");
    if (i < txt.length) {
        big_text.value += txt.charAt(i);
        i++;
        setTimeout(typeTextOut, speed);
    }
}

// Checks if the inputted data is the correct data and alerts if correct
function activateHiddenInputOne() {
    let big_text = document.getElementById("slogan");
    if (secret_value_1 == big_text.value) {
        alertInput(1);
    }
}

// We can put whatever we want here
function alertInput(secret_number) {
    if (secret_number === 1) {
        alert("You found easter egg 1"); 
    }
}