import carro from "../models/Carro.js";
import { identificador } from "../models/Identificador.js";

class CarroController {
  static async listarCarros(req, res) {
    try {
      const listaCarros = await carro.find({});
      res.status(200).json(listaCarros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarCarroPorId(req, res) {
    try {
      const id = req.params.id;
      const carroEncontrado = await carro.findById(id);
      res.status(200).json(carroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do carro` });
    }
  }

  static async cadastrarCarro(req, res) {
    const novoCarro = req.body;
    try {
      const identificadorEncontrado = await identificador.findById(
        novoCarro.identificador
      );
      const carroCompleto = {
        ...novoCarro,
        identificador: { ...identificadorEncontrado._doc },
      };
      const carroCriado = await carro.create(carroCompleto);
      res
        .status(201)
        .json({ message: "criado com sucesso", carro: carroCriado });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar carro` });
    }
  }

  static async atualizarCarro(req, res) {
    try {
      const id = req.params.id;
      await carro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "carro atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async excluirCarro(req, res) {
    try {
      const id = req.params.id;
      await carro.findByIdAndDelete(id);
      res.status(200).json({ message: "carro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }

  static async listarCarrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const carrosPorEditora = await carro.find({ editora: editora });
      res.status(200).json(carrosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default CarroController;
