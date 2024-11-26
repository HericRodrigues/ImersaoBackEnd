import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarBD from "../config/dbConfig.js";

let conexao;


async function obterConexao() {
    if (!conexao) {
        conexao = await conectarBD(process.env.STRING_CONEXAO);
    }
    return conexao;
}

export async function getTodosPosts() {
    const conexao = await obterConexao();
    const db = conexao.db("postsHzao");
    const colecao = db.collection("hzaoTest1");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const conexao = await obterConexao();
    const db = conexao.db("postsHzao");
    const colecao = db.collection("hzaoTest1");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost ) {
    const conexao = await obterConexao();
    const db = conexao.db("postsHzao");
    const colecao = db.collection("hzaoTest1");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id:new ObjectId(objID)}, {$set:novoPost} );
}


