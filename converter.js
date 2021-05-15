

function conversion() {
    let fromVal = from();
    let toVal = to();
    let inputVal = input();
    let converted = convert(fromVal, toVal, inputVal);
    outputTo('result', converted);
}

document.getElementById('btn').addEventListener('click',conversion);

function convert(from, to, inputVal) {
    result = "";
switch (key) {
    case value:
        result = fahrenheitToCelsius(inputVal)
        break;
    case value1:
        result = fahrenheitToKelvin( inputVal);
        break;    
    case value2:
        result = celsiusToKelvin( inputVal);
        break;
    default:
        break;
}
}