/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

var objeto = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
var frase = 'T35t3 d3 35t4g1o';
var alter1 = frase.replace(/3/g, objeto[3]);
var alter2 = alter1.replace(/1/g, objeto[1]);
var alter3 = alter2.replace(/5/g, objeto[5]);
var resultado = alter3.replace(/4/g, objeto[4]);

window.exercise03 = function() {
  console.log("resultado ex3: ");
  console.log(resultado);
};
