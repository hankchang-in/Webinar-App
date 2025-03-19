import mongoose from "mongoose";

const {DB_USERNAME, DB_PASSWORD} = process.env;
console.log(DB_USERNAME, DB_PASSWORD)
const MONGODB_URI:string = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ss4ig6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(MONGODB_URI)
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// Caching the connection to prevent multiple connections in development
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDB() {
  try{
    if (cached.conn) {
      return cached.conn;
    }
  
    if (!cached.promise) {
      console.log("🚀 Connecting to MongoDB...");
      cached.promise = mongoose
        .connect(MONGODB_URI as string , {
          dbName: "webinarDB",
        })
        .then((mongoose) => {
          console.log('mongoose connected')
          return mongoose;
      }).catch((err) => {
        console.log('Unable to connect Database' ,err)
        throw new Error("Unable to connect Database");
      });
    }
    
  
  }catch(err){
    console.log(err)
    process.exit(1)
  }
}
