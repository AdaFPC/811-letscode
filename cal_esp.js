class Calculadora{
    constructor(operador){
        this.history = new Map()
        this.operador = operador
        this.current = []
    }
    equals(){
        this.current = []
    }
    enter(char) {
        this.current = [...this.current, char]
    }
    reset(){
        this.history = new Map()
    }
    list(){
        console.table(this.history)
    }
    register(operacao, value){
        this.history.set(operacao, value)
    }
}


class CalculadoraSoma extends Calculadora{
    constructor(operador){
        super(operador)
    }
    equals(){
        const soma = this.current.reduce(
            (somaAtual, current) => somaAtual + current
        )
        super.register(this.current.join('+'), soma);
        super.equals();
        return soma;
    }
}
let calc = new CalculadoraSoma()
calc.enter(10)
calc.enter(15)
console.log(calc.equals())

class CalculadoraSubtracao extends Calculadora{
    constructor(operador){
        super(operador)
    }
    equals(){
        const subtracao = this.current.reduce(
            (subtracaoAtual, current) => subtracaoAtual - current
        )
        super.register(this.current.join('-'), subtracao);
        super.equals();
        return subtracao;
    }
}

let calc1 = new CalculadoraSubtracao()
calc1.enter(10)
calc1.enter(5)
console.log(calc1.equals())

class CalculadoraDivisao extends Calculadora{
    constructor(operador){
        super(operador)
    }
    equals(){
        const divisao = this.current.reduce(
            (divisaoAtual, current) => divisaoAtual / current
        )
        super.register(this.current.join('/'), divisao);
        super.equals();
        return divisao;
    }
}
let calc2 = new CalculadoraDivisao()
calc2.enter(10)
calc2.enter(5)
console.log(calc2.equals())

class CalculadoraMultiplicacao extends Calculadora{
    constructor(operador){
        super(operador)
    }
    equals(){
        const multiplicacao = this.current.reduce(
            (multiplicacaoAtual, current) => multiplicacaoAtual * current
        )
        super.register(this.current.join('*'), multiplicacao);
        super.equals();
        return multiplicacao;
    }
}

let calc3 = new CalculadoraMultiplicacao()
calc3.enter(10)
calc3.enter(15)
console.log(calc3.equals())

