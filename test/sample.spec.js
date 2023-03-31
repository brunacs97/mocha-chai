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