/* Função calculadora:
 - Função "enter"
 - Função "equals"
 - Função "list", que mostra todas as operações já executadas na calculadora, seguida de seus resultados
 - Função "reset"
Controlar os operadores e entradas de valor*/

const calculadora = (() => {

    let valoresOperacao = [];
  
    let listaOperacoes = [];
  
    const operacoes = {
      '+': (v1, v2) => v1 + v2,
      '-': (v1, v2) => v1 - v2,
      '/': (v1, v2) => v1 / v2,
      '*': (v1, v2) => v1 * v2,
      'x': (v1, v2) => v1 * v2,
  
    };
  
    const enter = (input) => valoresOperacao.push(input);
  
    const equals = () => {    
  
      const operacao = valoresOperacao.reduce((acum, valor) => {
  
          if (isNaN(valor)) acum.op = valor.toLowerCase();
  
          else acum.numeros.push(valor);
  
          return acum;
  
        },{ op: '', numeros: [] })
  
      const resultado = operacao.numeros.reduce(operacoes[operacao.op]);    
  
      listaOperacoes.push({ entrada: valoresOperacao.reduce((v1,v2) => v1+' '+v2), resultado });
  
      valoresOperacao = [];
  
      return resultado
  
    };
    const list = () => listaOperacoes;
    
    const reset = () => {
  
      listaOperacoes = [];
    };
  
    return { enter, equals, list, reset};
  
  })();

calculadora.enter(5)
calculadora.enter("+")
calculadora.enter(5)
console.log(calculadora.equals())
calculadora.enter(4)
calculadora.enter(5)
calculadora.enter("*")
console.log(calculadora.equals())
console.log(calculadora.list())
calculadora.enter(5)
calculadora.enter(5)
calculadora.enter(5)
calculadora.enter(5)
calculadora.enter("+")
console.log(calculadora.equals())
console.log(calculadora.list())
calculadora.reset()
console.log(calculadora.list())
