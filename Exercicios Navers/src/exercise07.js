/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */


const encontrar = function(){
  resultado = pessoas.find((pessoa) => pessoa.age < 25);

  if (resultado == null){
    console.log('nenhum resultado foi encontrado');
  }

  else{
    console.log(resultado.first_name + ' ' + resultado.last_name);
  }
}

window.exercise07 = function() {
  console.log("resultado ex7: ");
  encontrar();
};
