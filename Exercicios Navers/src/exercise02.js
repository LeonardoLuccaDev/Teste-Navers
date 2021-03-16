/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

window.exercise02 = function() {
  console.log("resultado ex2: ");
  var frase = 'teste 1 de 2 string 3';
  var resultado = frase.replace(/1|2|3/g, "$");
  console.log(resultado);
};
