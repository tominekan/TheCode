var array = ["Y0uSH01n;tBeeSea1!ngTh!s", "*insert coded message*", "OOOOOOOGGGGGGGGGAAAAAAAAAAABBBBBBBBBOOOOOOOOOOGGGGGGGGGGGAAAAAAAAA"];
var speed = 2500;
var bool = true;
document.title = "";

function animateTitle() {
    var i = 0;
    if (i < array.length) {
        document.title = array[i];
        setTimeout(animateTitle, speed);
        i++;
    }
}

function 