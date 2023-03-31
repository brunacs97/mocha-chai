import assert from 'assert'

describe('Meu primeiro teste ', () => {
    it('Verificar uma igualdade' , () => {
        let aux = 2
        assert.strictEqual(aux , 2)
    });
    it('Verificar uma desigualdade' , () => {
        let aux = 2
        assert.notStrictEqual(aux , 3)
    });
});
