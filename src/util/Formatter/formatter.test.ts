import {formatter} from '..';

describe('Formatter', () => {
    it('Should be return the correct acronym', () => {
        const acronym = formatter.extractStockAcronym(
            'Banco do Brasil (BBAS3)',
        );
        expect(acronym).toBe('BBAS3');
    });

    it('Should be return the value with currency format', () => {
        const currency = formatter.numberToCurrency(10);
        expect(currency).toBe('R$\xa010,00');
    });

    it('Should be return the value with currency format without R$', () => {
        const currency = formatter.numberToCurrency(10, true);
        expect(currency).toBe('10,00');
    });
});
