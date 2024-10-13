export default class Produto {
    private nome: string;
    private precoFilamento: number;
    private quantidadeMaterial: number;
    private tempoImpressao : number; 
    private margemLucro : number; 
    private readonly taxaDistribuidora : number = 1.01
    private readonly consumoImpressora : number = 110

    constructor(nome: string, precoFilamento: number, quantidadeMaterial: number, tempoImpressao: number, margemLucro: number) {
        this.nome = nome;
        this.precoFilamento = precoFilamento;
        this.quantidadeMaterial = quantidadeMaterial;
        this.tempoImpressao = tempoImpressao;
        this.margemLucro = margemLucro;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getPrecoFilamento(): number {
        return this.precoFilamento;
    }

    setPrecoFilamento(precoFilamento: number): void {
        this.precoFilamento = precoFilamento;
    }

    getQuantidadeMaterial () : number {
        return this.quantidadeMaterial;
    }

    setQuantidadeMaterial (quantidadeMaterial: number) : void {
        this.quantidadeMaterial = quantidadeMaterial;
    }

    getTempoImpressao() : number {
        return this.tempoImpressao;
    }

    setTempoImpressao(tempoImpressao: number) : void {
        this.tempoImpressao = tempoImpressao
    }

    getMargemLucro() : number {
        return this.margemLucro;
    }

    setMargemLucro(margemLucro: number): void {
        this.margemLucro = margemLucro;
    }

    calcularValor = (): object => {
        const a = this.precoFilamento;
        const b = this.quantidadeMaterial;
        const c = this.tempoImpressao;
        const d = this.taxaDistribuidora;
        const e = this.consumoImpressora;
        const f = this.margemLucro;
        
        const pri_gra = a / 10;
        const mat_cos = (pri_gra * b) / 100;
        const ene_cos = (c * d * e) / 1000;
        const tot_cos = mat_cos + ene_cos;
        const tot_gra = tot_cos / b;
        const fin_pri = tot_cos * (f / 100) + tot_cos;

        return {
            valorFinal: fin_pri,
            valorGasto: tot_gra
        };
      };
}
