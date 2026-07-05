import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/school-management";
const dbName = process.env.MONGODB_DB || "school-management";

let clientPromise;

function createMongoClient() {
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export async function getMongoClient() {
    if (!clientPromise) {
        const client = createMongoClient();
        clientPromise = client.connect();
    }
    return clientPromise;
}

export async function getMongoDb() {
    const client = await getMongoClient();
    return client.db(dbName);
}
