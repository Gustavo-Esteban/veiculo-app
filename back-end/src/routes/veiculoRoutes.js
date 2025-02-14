const express = require("express");
const veiculoController = require("../controllers/veiculosController");

const router = express.Router();

router.get("/", veiculoController.listarVeiculos);
router.get("/:id", veiculoController.buscarVeiculo);
router.post("/", veiculoController.criarVeiculo);
router.put("/:id", veiculoController.atualizarVeiculo);
router.delete("/:id", veiculoController.deletarVeiculo);

module.exports = router;