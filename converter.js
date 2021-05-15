
document.getElementById('btn').addEventListener('click',conversion);

function conversion() {
    let fromVal = from();
    let toVal = to();
    let inputVal = input();
    let converted = convert(fromVal, toVal, inputVal);
    outputTo('result', converted);
}

function from() {
    let selected = document.getElementById("from").value;
    return selected;
}
function to() {
    let selected = document.getElementById("to").value;
    return selected;
}
function input() {
    let inputVal = document.getElementById("input").value;
    inputVal = inputVal.replace(",",".");
    return inputVal;
}



function outputTo(where, result) {
    document.getElementById(where).innerText = result;
}

function convert(from, to, inputVal) {//cfk fahrenheit

    switch (from+""+to) {
        case '12':
            return celsiusToFahrenheit(inputVal);
        case '21':
            return fahrenheitToCelsius(inputVal);
        case '13':
            return celsiusToKelvin(inputVal);
        case '31':
            return kelvinToCelsius(inputVal);
        case '23':
            return fahrenheitToKelvin(inputVal);     
        case '32':
            return kelvinToFahrenheit(inputVal);
        default:
            return inputVal;

    }

    function celsiusToFahrenheit(input) {
        return (input * 9/5 ) + 32 +"°F";

    }
     function fahrenheitToCelsius(input) {
        return (input - 32) * 5/9 +"°C";
    }
     function celsiusToKelvin(input) {
        return (input - 32) * 5/9 +"C";

    }
    function kelvinToCelsius(input) {
        return (input - 32) * 5/9 +"C";

    }
     function fahrenheitToKelvin(input) {
        return (input - 32) * 5/9 +"C";

    }
     function kelvinToFahrenheit(input) {
        return (input - 32) * 5/9 +"C";

    }
}