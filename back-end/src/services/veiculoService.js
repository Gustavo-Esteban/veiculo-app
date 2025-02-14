const { v4: uuidv4 } = require('uuid');

let veiculos = [
    {
        id: "ca1e26d9-4efe-4ea8-8321-5c4dda32d19e",
        placa: "ABC-1234",
        chassi: "9BWZZZ377VT004251",
        renavam: "12345678901",
        modelo: "Gol",
        marca: "Volkswagen",
        ano: 2020,
    },
    {
        id: "db4081dc-c442-423d-8206-aafb462def68",
        placa: "XYZ-5678",
        chassi: "9BWZZZ377VT004252",
        renavam: "98765432109",
        modelo: "Onix",
        marca: "Chevrolet",
        ano: 2021,
    },
    {
        id: "a5370682-7b0a-4b6a-ab93-25ff7e66007d",
        placa: "DEF-9101",
        chassi: "9BWZZZ377VT004253",
        renavam: "11223344556",
        modelo: "HB20",
        marca: "Hyundai",
        ano: 2019,
    },
];

function listarVeiculos() {
    return veiculos;
}

function buscarVeiculoPorId(id) {
    return veiculos.find((veiculo) => veiculo.id === id);
}

function criarVeiculo(veiculo) {
    veiculo.id = uuidv4();
    veiculos.push(veiculo);
    return veiculo;
}

function deletarVeiculo(id) {
    const tamanhoInicial = veiculos.length;
    veiculos = veiculos.filter((veiculo) => veiculo.id !== id);

    return veiculos.length < tamanhoInicial;
}

function atualizarVeiculo(id, veiculoAtualizado) {
    const index = veiculos.findIndex((veiculo) => veiculo.id === id);
    if (index !== -1) {
        veiculos[index] = { ...veiculos[index], ...veiculoAtualizado };
        return veiculos[index];
    }
    return null;
}

module.exports = {
    listarVeiculos,
    buscarVeiculoPorId,
    criarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
};