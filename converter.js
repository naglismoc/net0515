

function conversion() {
    let fromVal = from();
    let toVal = to();
    let inputVal = input();
    let converted = convert(fromVal, toVal, inputVal);
    outputTo('result', converted);
}

document.getElementById('btn').addEventListener('click',conversion);