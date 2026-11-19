import { Request, Response } from "express";
import * as produtoService from "../Service/produtoService"

export async function recuperarTodos(req: Request, res: Response){
    const categoria = req.body.categoria;
    const produtos = await produtoService.recuperarTodos(categoria ? String(categoria) : undefined);
    return res.status(200).json(produtos);
}

export async function recuperarPorId(req: Request, res: Response){
    const produto = await produtoService.recuperarPorId(req.body.id);
    if(!produto){
        return res.status(404).json({
            mensagem: "Prduto nao encontrado"
        });
    }
    return res.status(200).json(produto);
}

export async function cadastrar(req: Request, res: Response){
    const produto = await produtoService.cadastrar(req.body);
    return res.status(200).json(produto);
}

export async function removerPorId(req: Request, res: Response){
    const produto = await produtoService.removerPorId(req.body.id);
    if(!produto){
        return res.status(404).json({mensagem: "Produto nao encontrado"})
    }
    return res.status(204).send();
}

export async function atualizarPorId(req: Request, res: Response){
    const produto = await produtoService.atualizarProId(req.body.id);
    if(!produto){
        return res.status(204).json({mensagem: "Produto nao encontrado"})
    }
    return res.status(202).json(produto);
}