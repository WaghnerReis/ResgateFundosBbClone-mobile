import React, {useEffect, useMemo} from 'react';

import {formatter} from '../../util';

import {useTotalAmount} from '../../hooks/totalAmount';

import {Stock} from '../../interfaces';
import {GetInvestimentProps} from './interfaces';

import {FlatList, ListRenderItem} from 'react-native';

import {Header, CustomText, Buttom} from '../../components';
import {Card, ListItem, Divider} from './components';

import {Container, TitleContainer, InvestmentData} from './styles';

const GetInvestment: React.FC<GetInvestimentProps> = ({route}) => {
    const {totalAmount, initCount, cleanCount} = useTotalAmount();
    const {investment} = route.params;

    useEffect(() => {
        initCount();
        return () => {
            cleanCount();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formattedTotalAmount = useMemo(
        () => formatter.numberToCurrency(totalAmount),
        [totalAmount],
    );

    const formattedMoneyValue = useMemo(
        () => formatter.numberToCurrency(investment.saldoTotal),
        [investment.saldoTotal],
    );

    const renderItems: ListRenderItem<Stock> = ({item}) => (
        <ListItem item={item} investment={investment} />
    );

    return (
        <Container>
            <Header>Resgate</Header>

            <TitleContainer paddingTop>
                <CustomText type="secondaryLarge">
                    DADOS DO INVESTIMENTO
                </CustomText>
            </TitleContainer>

            <Card>
                <InvestmentData>
                    <CustomText type="primarySmall">Nome</CustomText>
                    <CustomText type="secondaryLarge">
                        {investment.nome}
                    </CustomText>
                </InvestmentData>

                <Divider />

                <InvestmentData>
                    <CustomText type="primarySmall">
                        Saldo total disponível
                    </CustomText>
                    <CustomText type="secondaryLarge">
                        {formattedMoneyValue}
                    </CustomText>
                </InvestmentData>
            </Card>

            <TitleContainer>
                <CustomText type="secondaryLarge">
                    RESGATE DO SEU JEITO
                </CustomText>
            </TitleContainer>

            <FlatList
                data={investment.acoes}
                keyExtractor={item => item.id}
                renderItem={renderItems}
            />
            <Card>
                <InvestmentData>
                    <CustomText type="primarySmall">
                        Valor total a resgatar
                    </CustomText>
                    <CustomText type="secondaryLarge">
                        {formattedTotalAmount}
                    </CustomText>
                </InvestmentData>
            </Card>

            <Buttom onPress={() => console.log('GO é Massa!!')}>
                CONFIRMAR RESGATE
            </Buttom>
        </Container>
    );
};

export default GetInvestment;
