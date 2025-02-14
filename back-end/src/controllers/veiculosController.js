const veiculoService = require("../services/veiculoService");

function listarVeiculos(req, res) {
    const veiculos = veiculoService.listarVeiculos();
    res.json(veiculos);
}

function buscarVeiculo(req, res) {
    const id = req.params.id;
    const veiculo = veiculoService.buscarVeiculoPorId(id);

    if (veiculo) {
        res.json(veiculo);
    } else {
        res.status(404).send('Veículo não encontrado');
    }
}

function criarVeiculo(req, res) {
    const novoVeiculo = veiculoService.criarVeiculo(req.body);
    res.status(201).json(novoVeiculo);
}

function atualizarVeiculo(req, res) {
    const id = req.params.id;
    const veiculoAtualizado = req.body;
    const veiculo = veiculoService.atualizarVeiculo(id, veiculoAtualizado);

    if (veiculo) {
        res.json(veiculo);
    } else {
        res.status(404).send('Veículo não encontrado');
    }
}

function deletarVeiculo(req, res) {
    const id = req.params.id;
    const sucesso = veiculoService.deletarVeiculo(id);

    if (sucesso) {
        res.status(204).send();
    } else {
        res.status(404).send('Veículo não encontrado');
    }
}

module.exports = {
    listarVeiculos,
    buscarVeiculo,
    criarVeiculo,
    atualizarVeiculo,
    deletarVeiculo,
};