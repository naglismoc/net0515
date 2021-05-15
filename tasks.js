

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
    let table = '<table>';
    table += row(xAxis,1);  
    for (let y = 2; y <= yAxis; y++) {
        table += row(xAxis,y);    
    }
    table += '</table>';
    return table;
}
function row(xAxis, y) { //sugeneruoja daugybos lentelės eilutę
    let row = '<tr>';
    for (let x = 1; x <= xAxis; x++) {
        row += cell( /*x+' * '+' y = '+*/multiplication( x, y ) );  
        
    }
    row += '</tr>'
    return row;
}

function multiplication(x,y) { //atlieka sudauginimą
    return x * y;
}
function cell(num){ // apvelka gautą skaičių HTML elementu.
    return '<td>'+num+'</td>'
}

// console.log();
// console.log( cell( multiplication(3,6) ) );
// console.log(row(5, 3));
document.getElementById('calculus').innerHTML = calculus(10,10)


let btn = document.getElementById('btn');

btn.addEventListener('click',paspaudei);

function paspaudei() {
    console.log("paspausk mane dar karteli.. =)");
}