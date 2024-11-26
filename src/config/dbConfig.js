import { MongoClient } from "mongodb";

async function conectarBD(connectionString) {
    const client = new MongoClient(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Conexão com o MongoDB estabelecida.");
    return client;
}

export default conectarBD;