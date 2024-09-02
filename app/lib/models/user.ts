import mongoose, { Document, Schema } from 'mongoose';

// Définition du schéma pour les utilisateurs
const UserSchema = new Schema({
  id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true, // Ajoute des champs `createdAt` et `updatedAt`
});

// Création du modèle à partir du schéma
const User = mongoose.model<UserDocument>('User', UserSchema);

// Interface pour le document utilisateur
export interface UserDocument extends Document {
  id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

export default User;
