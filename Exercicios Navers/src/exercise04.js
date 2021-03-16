/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/
  
const pesquisarCep = async() => {

      const url = `https://viacep.com.br/ws/12513-380/json/`;

      const dados = await fetch(url);
      const endereco = await dados.json();
      var ENDERECO = endereco.logradouro + " , n° 58 , " + endereco.bairro;
      var NUMERO = " Telefone: (" + endereco.ddd + ")" + "98185-5810";
      var CIDADEESTADO = " " + endereco.localidade + " , São Paulo ";

      console.log(ENDERECO + CIDADEESTADO + NUMERO);
}

window.exercise04 = function() {
  console.log("resultado ex4: ");
  console.log(pesquisarCep());
  
}