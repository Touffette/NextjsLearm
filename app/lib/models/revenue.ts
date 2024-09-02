import mongoose, { Document, Schema } from 'mongoose';

// Définition du schéma pour les revenus
const RevenueSchema = new Schema({
  month: { type: String, required: true, unique: true },
  revenue: { type: Number, required: true }
}, {
  timestamps: true, // Ajoute des champs `createdAt` et `updatedAt`
});

// Création du modèle à partir du schéma
const Revenue = mongoose.model<RevenueDocument>('Revenue', RevenueSchema);

// Interface pour le document revenu
export interface RevenueDocument extends Document {
  month: string;
  revenue: number;
}

export default Revenue;
