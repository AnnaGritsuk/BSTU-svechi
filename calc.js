const BtnM1 = document.getElementById('btnMinusF');
const BtnM2 = document.getElementById('btnMinusK');

const BtnP1 = document.getElementById('btnPlusF');
const BtnP2 = document.getElementById('btnPlusK');

let IntVal1 = document.getElementById('intF').value;
let IntVal2 = document.getElementById('intK').value;

BtnP1.onclick = function () {
  IntVal1 = Number(IntVal1) + 1;
  document.getElementById('intF').value = IntVal1;
}
BtnM1.onclick = function () {
  IntVal1 = Number(IntVal1) - 1;
  if (IntVal1 < 0) IntVal1 = 0;
  document.getElementById('intF').value = IntVal1;
}

BtnP2.onclick = function () {
  IntVal2 = Number(IntVal2) + 1;
  document.getElementById('intK').value = IntVal2;
}
BtnM2.onclick = function () {
  IntVal2 = Number(IntVal2) - 1;
  if (IntVal2 < 0) IntVal2 = 0;
  document.getElementById('intK').value = IntVal2;
}



const buttonTotal = document.querySelector('.button_tot').addEventListener('click', Total);
function Total() {
  var total = Number(IntVal1) * 15 + Number(IntVal2) * 75;
  document.getElementById('Price').innerHTML = total + " BYN";
}
