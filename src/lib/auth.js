import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import bcrypt from "bcryptjs";
import { getMongoClient, getMongoDb } from "./mongo";

const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET || "better-auth-secret-12345678901234567890",
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    database: async () => {
        const client = await getMongoClient();
        const db = await getMongoDb();
        return mongodbAdapter(db, { client });
    },
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 8,
        password: {
            hash: async (password) => bcrypt.hash(password, 10),
            verify: async (password, hash) => bcrypt.compare(password, hash),
        },
    },
    plugins: [],
});

export default auth;
