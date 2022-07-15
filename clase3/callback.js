// padre = (callback) => {
//     const result = 2 + 2;
//     return callback(result)
// };

// hijo = (res) => {
//     console.log(res);

// }

// padre(hijo)//sin parentesis el hijo por que ya se ejecuta
const padre = (res = 2 + 2) => {
  return console.log(res);
};
padre()
//padre(2+2); haria lo mismo que en el argumento: output: 4
