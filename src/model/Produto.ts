import { Schema, model } from 'mongoose';
export interface IProduto{
    nome: String;
    categoria: String;
    descricao: String;
    preco: Number;
    imagem: String;
}

const produtoSchema = new Schema<IProduto>(
    {
        nome: String,
        categoria: String,
        descricao: String,
        preco: Number,
        imagem: String
    }
)

export const Produto = model<IProduto>("Produto", produtoSchema)