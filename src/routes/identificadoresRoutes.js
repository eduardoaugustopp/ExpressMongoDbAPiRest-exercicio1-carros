import express from "express";
import IdentificadorController from "../controllers/identificadorController.js";

const routes = express.Router();

routes.get("/identificadores", IdentificadorController.listarIdentificadores);
routes.get(
  "/identificadores/:id",
  IdentificadorController.listarIdentificadorPorId
);
routes.post("/identificadores", IdentificadorController.cadastrarIdentificador);
routes.put(
  "/identificadores/:id",
  IdentificadorController.atualizarIdentificador
);
routes.delete(
  "/identificadores/:id",
  IdentificadorController.excluirIdentificador
);

export default routes;
