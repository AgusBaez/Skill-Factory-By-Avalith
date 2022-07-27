class Estudiante {
  constructor(nombre, apellido, legajo, notas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.legajo = legajo;
    this.notas = notas;
  }
}

let estudiante1 = new Estudiante("Pablo", "Bianco", 12312, [5, 5, 5, 5, 5]);
let estudiante2 = new Estudiante("Alexis", "Moragues", 21321, [6, 6, 6, 6, 6]);
let estudiante3 = new Estudiante("Agustin", "Baez", 31231, [7, 7, 7, 7, 7]);
let estudiante4 = new Estudiante("Justina", "Castillo", 23123, [8, 8, 8, 8, 8]);

let arrEstudiantes = [estudiante1, estudiante2, estudiante3, estudiante4];
// console.log(arrEstudiantes);

promedio = function (nombreEstudiante) {
  let notasEstudiante = nombreEstudiante.notas;
  let totalNotas = 0;
  for (let i = 0; i < notasEstudiante.length; i++) {
    totalNotas += notasEstudiante[i];
  }
  //Se crea el promedio a traves de la division entre el largo del array 'notas' y la suma total de los valores dentro del array 'notas'
  let notaFinal = totalNotas / notasEstudiante.length;
  return notaFinal;
};

imprimirPromedios = () => {
  for (let i = 0; i < arrEstudiantes.length; i++) {
    console.log(arrEstudiantes[i].legajo + " " + promedio(arrEstudiantes[i]));
  }
};

mejorEstudiante = function (listaDeEstudiante) {
  return console.log(listaDeEstudiante[1]);
};

imprimirPromedios();
mejorEstudiante(arrEstudiantes);
