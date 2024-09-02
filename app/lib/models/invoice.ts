import mongoose, { Document, Schema } from 'mongoose';

// Définition du schéma pour les factures
const InvoiceSchema = new Schema({
  id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  customer_id: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true, // Ajoute des champs `createdAt` et `updatedAt`
});

// Création du modèle à partir du schéma
const Invoice = mongoose.model<InvoiceDocument>('Invoice', InvoiceSchema);

// Interface pour le document facture
export interface InvoiceDocument extends Document {
  id: mongoose.Types.ObjectId;
  customer_id: mongoose.Types.ObjectId;
  amount: number;
  status: string;
  date: Date;
}

export default Invoice;
