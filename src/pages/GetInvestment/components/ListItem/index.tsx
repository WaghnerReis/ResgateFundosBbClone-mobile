import React, {useMemo} from 'react';

import {formatter} from '../../../../util';
import {ItemProps} from '../../interfaces';

import {CustomText} from '../../../../components';

import Card from '../Card';
import Divider from '../Divider';

import {StockContainer} from './styles';

const ListItem: React.FC<ItemProps> = ({item, investment}) => {
    const formattedStock = useMemo(
        () => formatter.extractStockAcronym(item.nome),
        [item.nome],
    );

    const formattedMoneyValue = useMemo(
        () =>
            formatter.numberToCurrency(
                (item.percentual / 100) * investment.saldoTotal,
            ),
        [investment.saldoTotal, item.percentual],
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
        </Card>
    );
};

export default ListItem;
