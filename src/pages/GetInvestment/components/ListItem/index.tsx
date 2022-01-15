import React, {useMemo} from 'react';

import {formatter} from '../../../../util';
import {ItemProps} from '../../interfaces';

import {CustomText} from '../../../../components';

import {Card, Divider, Input} from '..';

import {StockContainer} from './styles';

const ListItem: React.FC<ItemProps> = ({item, investment}) => {
    const formattedStock = useMemo(
        () => formatter.extractStockAcronym(item.nome),
        [item.nome],
    );

    const calculedValue = useMemo(
        () => (item.percentual / 100) * investment.saldoTotal,
        [investment.saldoTotal, item.percentual],
    );

    const formattedMoneyValue = useMemo(
        () => formatter.numberToCurrency(calculedValue),
        [calculedValue],
    );

    return (
        <Card>
            <StockContainer>
                <CustomText type="primarySmall">Ação</CustomText>
                <CustomText type="secondaryLarge">{formattedStock}</CustomText>
            </StockContainer>

            <Divider />

            <StockContainer>
                <CustomText type="primarySmall">Saldo acumulado</CustomText>
                <CustomText type="secondaryLarge">
                    {formattedMoneyValue}
                </CustomText>
            </StockContainer>

            <Divider />

            <Input
                id={formattedStock}
                title="Valor a resgatar"
                placeholder="Informe o valor"
                initialValue={calculedValue}
                limit={calculedValue}
                formattedLimit={formattedMoneyValue}
            />
        </Card>
    );
};

export default ListItem;
