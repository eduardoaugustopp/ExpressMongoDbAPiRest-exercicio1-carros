import express from "express";
import carros from "./carrosRoutes.js";
import identificadores from "./identificadoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), carros, identificadores);
};

export default routes;
