import { identificador } from "../models/Identificador.js";

class IdentificadorController {
  static async listarIdentificadores(req, res) {
    try {
      const listaIdentificadores = await identificador.find({});
      res.status(200).json(listaIdentificadores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarIdentificadorPorId(req, res) {
    try {
      const id = req.params.id;
      const identificadorEncontrado = await identificador.findById(id);
      res.status(200).json(identificadorEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha na requisição do identificador`,
      });
    }
  }

  static async cadastrarIdentificador(req, res) {
    try {
      const novoIdentificador = await identificador.create(req.body);
      res
        .status(201)
        .json({ message: "criado com sucesso", carro: novoIdentificador });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao cadastrar identificador`,
      });
    }
  }

  static async atualizarIdentificador(req, res) {
    try {
      const id = req.params.id;
      await identificador.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "identificador atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirIdentificador(req, res) {
    try {
      const id = req.params.id;
      await identificador.findByIdAndDelete(id);
      res.status(200).json({ message: "identificador excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default IdentificadorController;
