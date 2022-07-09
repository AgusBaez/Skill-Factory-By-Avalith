//Una nueva clase para controlar los botones + el display
class Display {
  constructor(displayPrevValue, displayCurrentValue) {
    //Propiedades de una clase
    this.displayCurrentValue = displayCurrentValue;
    this.displayPrevValue = displayPrevValue;
    this.calculating = new Calculator();
    //Valor actual y anterior dentro del display
    this.currentValue = '';
    this.prevValue = '';
  }

  //metodo agregar valor al display
  addNumber(number) {
    //El arg es = al num que recibimos del index.js
    this.currentValue = number;
    this.showNumber();
  }

  //Metodo para imprimir valores en display
  showNumber() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPrevValue.textContent = this.prevValue;
    // textConten es el texto que esta dentro de las etiquetas Html // MDN https://developer.mozilla.org/es/docs/Web/API/Node/textContent
  }
}
