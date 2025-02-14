// src/server.js

const express = require("express");
const cors = require("cors");
const veiculoRoutes = require("./routes/veiculoRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/veiculos", veiculoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});