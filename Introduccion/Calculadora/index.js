const displayPrevValue = document.getElementById('prev-value');
const displayCurrentValue = document.getElementById('current-value');
//guarda los botones
const buttonsNumbers = document.querySelectorAll(".number");
//guarda 
const buttonsOperadores = document.querySelectorAll(".operador");

const display = new Display(displayPrevValue, displayCurrentValue);

//el display agrega un numero
buttonsNumbers.forEach(button => {
  //Eventlistener de click a cada boton del html
  button.addEventListener('click', () => display.addNumber(button.innerHTML)); //short hand
  /*cuando hacen click en un boton => Pasa el innerHtml como parametro para el display*/
  
});
