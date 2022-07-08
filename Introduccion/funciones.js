// Funciones
// Las funciones son bloques de codigo que cumplen con una funcionalidad y se pueden llamar mediante su firma

// --- Declaraciones ---
// Funciones Clasicas(declarada)
miFuncion();
function miFuncion(misParametros = "valor por defecto", varios) {
  return; //devolucion de valores
  // Linea ignorada por el return
}

// Funcion Expresada/Anonima
// Buena Practica¡¡
const funcion = function () {
  "No se pueden invocar antes (funcion como funcion de una variable)";
};

//Funciones Flecha
() => {
  //     Retorno
  // Las funciones siempre devuelven por defecto la ultima sentencia, si esta setencia no es algo devolvible devuelve undefiend
  // Podes usar return para frenar la funcion y retornar algo.
};

// Invocacion de Funciones
miFuncion();
