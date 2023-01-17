const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalculator');
const p = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);


function sumarInputValues(event) {
    console.log({ event });
    event.preventDefault();
   //p.setAttribute(value, String(Number (input1.value) + Number(input2.value)))
    p.innerHTML = 'Resultado es: ' + String(Number(input1.value) + Number(input2.value));
}



