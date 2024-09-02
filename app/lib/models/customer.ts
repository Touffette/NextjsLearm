import mongoose, { Document, Schema } from 'mongoose';

// Définition du schéma pour les clients
const CustomerSchema = new Schema({
  id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image_url: { type: String, required: true }
}, {
  timestamps: true, // Ajoute des champs `createdAt` et `updatedAt`
});

// Création du modèle à partir du schéma
const Customer = mongoose.model<CustomerDocument>('Customer', CustomerSchema);

// Interface pour le document client
export interface CustomerDocument extends Document {
  id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  image_url: string;
}

export default Customer;
