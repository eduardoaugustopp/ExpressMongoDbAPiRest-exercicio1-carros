import mongoose from "mongoose";

const identificadorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    chassi: { type: String },
  },
  { versionKey: false }
);

const identificador = mongoose.model("identificadores", identificadorSchema);

export { identificador, identificadorSchema };
