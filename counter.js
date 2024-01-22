let actual = document.getElementById("counterValue");

function onIncrement() {
    let c = parseInt(actual.textContent) + 1;
    actual.textContent = c
    if (c > 0) {
        actual.style.color = 'Green';
        document.getElementById("gr").style.backgroundColor = 'Green';
        document.getElementById("rd").style.backgroundColor = 'White';
        document.getElementById("rs").style.backgroundColor = 'White';
        document.getElementById("rs").style.color = 'Black';

    } else if (c < 0) {
        actual.style.color = 'Red';
    } else {
        actual.style.color = 'Black';
        document.getElementById("rd").style.backgroundColor = 'White';
        document.getElementById("gr").style.backgroundColor = 'white';

    }




}

function onDecrement() {
    let c = parseInt(actual.textContent) - 1;
    actual.textContent = c
    if (c < 0) {
        actual.style.color = 'Red';
        document.getElementById("rd").style.backgroundColor = 'Red';
        document.getElementById("gr").style.backgroundColor = 'white';
        document.getElementById("rs").style.backgroundColor = 'White';
        document.getElementById("rs").style.color = 'Black';
    } else if (c > 0) {
        actual.style.color = 'Green';
    } else {
        actual.style.color = 'Black';
        document.getElementById("rd").style.backgroundColor = 'White';
        document.getElementById("gr").style.backgroundColor = 'white';

    }


}

function onReset() {
    actual.textContent = 0
    actual.style.color = 'Black';
    document.getElementById("rd").style.backgroundColor = 'White';
    document.getElementById("gr").style.backgroundColor = 'white';
    document.getElementById("rs").style.backgroundColor = 'Black';
    document.getElementById("rs").style.color = 'White';
}

function bbig() {
    document.getElementById("rd").style.backgroundColor = 'White';
    document.getElementById("gr").style.backgroundColor = 'white';
    document.getElementById("rs").style.backgroundColor = 'white';
    document.getElementById("rs").style.color = 'Black';

}