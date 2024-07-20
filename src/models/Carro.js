import mongoose from "mongoose";
import { identificadorSchema } from "./Identificador.js";

const carroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    preco: { type: Number, required: true },
    autor: { type: String, required: true },
    imagem: { type: String },
    alt: { type: String },
    quantidade: { type: Number },
    categoria: { type: String },
    identificador: identificadorSchema,
  },
  { versionKey: false }
);

const carro = mongoose.model("carros", carroSchema);

export default carro;
