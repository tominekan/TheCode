var test = document.getElementByIdbyID("glitch");

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve, n);
    });
}

async function glitch (){
    test.color = 255;
}