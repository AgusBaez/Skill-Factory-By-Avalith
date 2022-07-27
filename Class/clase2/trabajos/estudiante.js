let estudiante = {
  nombre: "Sin Nombre",
  apellido: "Sin apellido",
  legajo: 0000,
  notas: [6, 7, 9, 7, 7],
  detalles: function () {
    return `Nombre: ${this.nombre}, \n Apellido: ${this.apellido}, \n Legajo: ${this.legajo}, \n Notas: [${this.notas}]`;
  },

  promedio: function () {
    let totalNotas = 0;
    for (let i = 0; i < this.notas.length; i++) {
      totalNotas += this.notas[i];
    }
    //Se crea el promedio a traves de la division entre el largo del array 'notas' y la suma total de los valores dentro del array 'notas'
    let notaFinal = totalNotas / this.notas.length;
    return notaFinal;
  },

  //funcion de comparaccion
  compararPromedio: function () {
    est1 = estudiante.promedio();
    est2 = estudiante2.promedio();
    if (est2 > est1) {
      console.log(
        `El mas mejor es: \n ${estudiante2.detalles()} Su promedio es: ${estudiante2.promedio()}`
      );
    } else {
      console.log(
        `\n El mas mejor es: \n ${estudiante.detalles()} \n Su promedio es: ${estudiante.promedio()}`
      );
    }
  },
};

let estudiante2 = Object.create(estudiante);
(estudiante2.nombre = "Javier"),
  (estudiante2.apellido = "Orlando"),
  (estudiante2.legajo = 0001),
  (estudiante2.notas = [9, 9, 5, 5, 5]);

estudiante2.detalles();
estudiante.promedio();
estudiante.compararPromedio();
