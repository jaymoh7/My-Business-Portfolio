import { MongoClient } from 'mongodb';

let db = null;
let client = null;

export async function connectDB() {
  if (db) return db;
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio-db';

  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db();
    console.log('✓ MongoDB connected');
    return db;
  } catch (error) {
    console.error('✗ MongoDB connection error:', error.message);
    throw error;
  }
}

export function getDB() {
  if (!db) throw new Error('Database not initialized');
  return db;
}

export async function initializeCollections() {
  const database = getDB();
  const collectionNames = await database.listCollections().toArray();
  const names = collectionNames.map((col) => col.name);

  if (!names.includes('contacts')) {
    await database.createCollection('contacts');
    console.log('✓ Contacts collection created');
  }

  if (!names.includes('audit_submissions')) {
    await database.createCollection('audit_submissions');
    console.log('✓ Audit submissions collection created');
  }
}

export async function closeDB() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
