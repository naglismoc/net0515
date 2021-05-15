

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
switch ("" + from + to) {
    case "12":
        result = fahrenheitToCelsius(inputVal)
        break;
    case "13":
        result = fahrenheitToKelvin( inputVal);
        break;    
    case "21":
        result = celsiusToKelvin( inputVal);
        break;
    default:
        result = inputVal;
        break;
}
}