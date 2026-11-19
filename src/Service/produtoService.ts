import { Produto, IProduto } from "../model/Produto"

export function recuperarTodos(categoria?: string){
    const filtro = categoria ? {categoria} : {}
    return Produto.find(filtro)
}

export function recuperarPorId(id: string){
    return Produto.findById(id);
}

export function cadastrar(dados: IProduto){
    return Produto.create(dados);
}

export function removerPorId(id: string){
    return Produto.findByIdAndDelete(id);
}

export function atualizarProId(id: string){
    return Produto.findByIdAndUpdate(id);
}