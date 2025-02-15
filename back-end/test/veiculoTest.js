const { expect } = require("chai");
const veiculoService = require("../src/services/veiculoService");

describe("Testes para CRUD de Veículos", () => {
  it("Deve criar um veículo", () => {
    const veiculo = {
      placa: "ABC-1234",
      chassi: "9BWZZZ377VT004251",
      renavam: "12345678901",
      modelo: "Fusca",
      marca: "VW",
      ano: 1980,
    };
    const resultado = veiculoService.criarVeiculo(veiculo);
    expect(resultado).to.have.property("id");
    expect(resultado.placa).to.equal(veiculo.placa);
    expect(resultado.modelo).to.equal(veiculo.modelo);
    expect(resultado.marca).to.equal(veiculo.marca);
    expect(resultado.ano).to.equal(veiculo.ano);
  });

  it("Deve listar veículos", () => {
    const veiculos = veiculoService.listarVeiculos();
    expect(veiculos).to.be.an("array");
  });

  it("Deve buscar um veículo por ID", () => {
    const veiculo = veiculoService.listarVeiculos()[0];
    const resultado = veiculoService.buscarVeiculoPorId(veiculo.id);
    expect(resultado).to.deep.equal(veiculo);
  });

  it("Deve retornar null ao buscar um veículo com ID inexistente", () => {
    const resultado = veiculoService.buscarVeiculoPorId("id-inexistente");
    expect(resultado).to.be.null;
  });

  it("Deve atualizar um veículo", () => {
    const veiculo = veiculoService.listarVeiculos()[0];
    const veiculoAtualizado = { modelo: "Fusca Azul", ano: 1981 };
    const resultado = veiculoService.atualizarVeiculo(
      veiculo.id,
      veiculoAtualizado
    );
    expect(resultado.modelo).to.equal(veiculoAtualizado.modelo);
    expect(resultado.ano).to.equal(veiculoAtualizado.ano);
  });

  it("Deve retornar null ao tentar atualizar um veículo com ID inexistente", () => {
    const veiculoAtualizado = { modelo: "Fusca Azul", ano: 1981 };
    const resultado = veiculoService.atualizarVeiculo(
      "id-inexistente",
      veiculoAtualizado
    );
    expect(resultado).to.be.null;
  });

  it("Deve deletar um veículo", () => {
    const veiculo = veiculoService.listarVeiculos()[0];
    const resultado = veiculoService.deletarVeiculo(veiculo.id);
    expect(resultado).to.be.true;
    const veiculoDeletado = veiculoService.buscarVeiculoPorId(veiculo.id);
    expect(veiculoDeletado).to.be.null;
  });

  it("Deve retornar false ao tentar deletar um veículo com ID inexistente", () => {
    const resultado = veiculoService.deletarVeiculo("id-inexistente");
    expect(resultado).to.be.false;
  });
});
