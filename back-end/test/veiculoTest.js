const { expect } = require('chai');
const veiculoService = require('../src/services/veiculoService');

describe('Testes para CRUD de Veículos', () => {
    it('Deve criar um veículo', () => {
        const veiculo = { id: 1, placa: 'ABC-1234', modelo: 'Fusca', marca: 'VW', ano: 1980 };
        const resultado = veiculoService.criarVeiculo(veiculo);
        expect(resultado).to.deep.equal(veiculo);
    });

    it('Deve listar veículos', () => {
        const veiculos = veiculoService.listarVeiculos();
        expect(veiculos).to.be.an('array');
    });
});
