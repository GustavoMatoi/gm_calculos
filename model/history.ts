import AsyncStorage from "@react-native-async-storage/async-storage";
import Produto from "./produto";

export default class Historico {
    private produtos: Produto[] = []

    addProduct(produto: Produto): void {
        this.produtos.push(produto)
    }

    removeProduct(index: number): void {
        this.produtos.splice(index, 1)
    }

    salveOnAs(produto: Produto): void {
        const produtoObj = {
            nome: produto.getNome(),
            
        }
        const produtoJson = JSON.stringify(produto)
        AsyncStorage.setItem(produto.getNome(), produtoJson)
    }
}