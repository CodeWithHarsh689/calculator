const display = document.getElementById("display");

function appendtodisplay(input){
    display.value+=input
}

function cleardisplay(){
    display.value='0';
}

function calculate(){
    try {
        display.value = eval(display.value);
    }   catch (error) {
        display.value = 'ERROR';
    }
}
