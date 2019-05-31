const Funcionario = require('./Funcionario');

let funcionario = new Funcionario();

console.log(funcionario.email + "\n\n\n");

funcionario.email = "olcobicho@hotmail.com";
console.log(funcionario.email + "\n\n\n");

funcionario.aleraOEmail("showDeBola@gmail.com");
console.log(funcionario.email + "\n\n\n");


