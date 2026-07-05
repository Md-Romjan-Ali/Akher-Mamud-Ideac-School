import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/school-management";
const options = {
    bufferCommands: false,
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 10000,
};

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectMongo() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(uri, options).then((mongooseConn) => mongooseConn);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
