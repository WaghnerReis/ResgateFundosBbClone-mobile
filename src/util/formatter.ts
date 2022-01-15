export const numberToCurrency = (number: number, withoutR$ = false) => {
    const format = new Map<string, string>([
        ['style', 'currency'],
        ['currency', 'BRL'],
        ['minimumFractionDigits', '2'],
        ['maximumFractionDigits', '2'],
    ]);

    if (withoutR$) {
        format.delete('style');
        format.delete('currency');
    }

    return number.toLocaleString('pt-br', Object.fromEntries(format));
};

export const extractStockAcronym = (text: string) => {
    const regex = /\((.*?)\)/;
    const [_, group1] = text.match(regex);
    return group1;
};
