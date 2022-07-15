function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
let dividir = (num1, num2) => num1 / num2;

function modulo(num1, num2) {
  return num1 % num2;
}

function esDivisible(num1, num2) {
  //es divisivle por 2?¡
  return modulo(num1, num2) === 0;
}

let resultado = dividir(restar(20, 2), multiplicar(2, sumar(1, 2)));
console.log(resultado);
console.log(esDivisible(5, 2));
let esMayor = true;
let edad = 0;
while (esMayor) {
  console.log("Su edad es " + edad);
  if (edad > 18) esMayor = false;
  edad++;
}
