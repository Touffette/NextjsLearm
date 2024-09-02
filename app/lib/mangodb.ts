import mongoose, { Mongoose } from 'mongoose'; // Importation de Mongoose avec le type Mongoose

const MONGODB_URI = process.env.MONGODB_URI; // URI de connexion MongoDB

// Vérification si l'URI de connexion est défini
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Déclaration des types pour l'objet global
declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Utilisation de globalThis pour accéder à l'objet global
let cached = globalThis.mongoose;

// Si la connexion n'est pas encore stockée, initialise un objet pour la gérer
if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
  // Si une connexion est déjà stockée, la retourne directement
  if (cached.conn) {
    return cached.conn;
  }

  // Si une promesse de connexion n'existe pas encore, crée-la
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Désactive le buffer des commandes en cas de déconnexion
    };

    // Crée une nouvelle promesse pour établir la connexion et la stocke dans l'objet cache
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }
  // Attends que la promesse de connexion soit résolue et stocke la connexion dans l'objet cache
  cached.conn = await cached.promise;
  return cached.conn; // Retourne la connexion MongoDB
}

export default dbConnect;
