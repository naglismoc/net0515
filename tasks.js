

let sk = 7;
if(sk == 1){
    console.log(1);
    sendSmsToTeacher();
}
if(sk == 2){
    console.log(2);
}
if(sk == 3){
    console.log(1);
}
if(sk == 4){
    console.log(2);
}
if(sk == 5){
    console.log(1);
}
if(sk == 6){
    console.log(2);
}


let day;
switch (0) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
default:
    day="eightDay";
}


console.log(day);











//table sruktūra

/* <table>
    <tr>
        <td></td>
    </tr>
</table> */

function calculus(xAxis, yAxis){ //paleidžia programą, priima 2 skaičius lentelės dydžiui
    table += row(xAxis,y);
    return table;
}
function row(xAxis, y) { //sugeneruoja daugybos lentelės eilutę
    row += cell( multiplication( x, y ) );     
    return row;
}

function multiplication(x,y) { //atlieka sudauginimą
    return 
}
function cell(num){ // apvelka gautą skaičių HTML elementu.
    return 
}
document.getElementById('sq').innerHTML = calculus(7,6)