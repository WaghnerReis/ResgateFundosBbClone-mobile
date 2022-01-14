export const numberToCurrency = (number: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(number);
};

export const numberToCurrencyWithR$ = (number: number) => {
    return number.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export const extractStockAcronym = (text: string) => {
    const regex = /\((.*?)\)/;
    const [_, group1] = text.match(regex);
    return group1;
};
