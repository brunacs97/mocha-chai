import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js';

const expect = chai.expect

//Testes da Calculadora.js

describe('Teste de soma ', () => {
    it.only('Deve somar 4 e 5 resultando em 9' , () => {
       let resultado = Calculadora.soma(4, 5)
       expect(resultado).to.be.eq(9)
    });

    it.only('Deve somar -4 e 5 resultando em 1' , () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    });
});

//Testando com TDD

describe('Teste de subtração ', () => {
    it.only('Deve subtrair 4 e 5 resultando em -1' , () => {
       let resultado = Calculadora.sub(4, 5)
       expect(resultado).to.be.eq(-1)
    });

    it.only('Deve somar -4 e 5 resultando em 1' , () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    });
});

describe('Teste de multiplicação ', () => {
    it.only('Deve multiplicar 4 e 5 resultando em 20' , () => {
       let resultado = Calculadora.multi(4, 5)
       expect(resultado).to.be.eq(20)
    });

    it.only('Deve multiplicar -4 e 5 resultando em -20' , () => {
        let resultado = Calculadora.multi(-4, 5)
        expect(resultado).to.be.eq(-20)
    });
});

describe('Teste de divisão ', () => {
    it.only('Deve divir 20 por 2 resultando em 10' , () => {
       let resultado = Calculadora.divi(20, 2)
       expect(resultado).to.be.eq(10)
    });

    it.only('Deve dividir -10 e 2 resultando em -5' , () => {
        let resultado = Calculadora.divi(-10, 2)
        expect(resultado).to.be.eq(-5)
    });
});



//Testando mocha e chai

describe('Meu primeiro teste ', () => {
    it('Verifica variavel "aux"' , () => {
        let aux = 2
        // assert.strictEqual(aux , 2)
        expect(aux).to.be.equals(2).and.to.be.a('number');
    });

    it('Verifica outra variavel' , () => {
        let aux = 'carro'
        expect(aux).to.be.equals('carro').and.not.equals('charrete')
    });
});


describe('Meu segundo teste ', () => {
    it('Verificar uma desigualdade' , () => {
        let aux = 2
        assert.notStrictEqual(aux , '2')
    });
    it('Verificar uma desigualdade' , () => {
        let aux = carro
        assert.notStrictEqual(aux , 'charrete')
    });
});