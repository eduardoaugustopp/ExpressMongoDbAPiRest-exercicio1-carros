import express from "express";
import CarroController from "../controllers/carroController.js";

const routes = express.Router();

routes.get("/carros", CarroController.listarCarros);
routes.get("/carros/busca", CarroController.listarCarrosPorEditora);
routes.get("/carros/:id", CarroController.listarCarroPorId);
routes.post("/carros", CarroController.cadastrarCarro);
routes.put("/carros/:id", CarroController.atualizarCarro);
routes.delete("/carros/:id", CarroController.excluirCarro);

export default routes;
