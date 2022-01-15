export interface Investment {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: Stock[];
}

export interface Stock {
    id: string;
    nome: string;
    percentual: number;
}
export interface InputProps {
    id: string;
    value: number;
}
export interface ErrorInputProps {
    id: string;
    message: string;
}
