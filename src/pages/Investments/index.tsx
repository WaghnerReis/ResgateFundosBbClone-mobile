import React, {useCallback, useEffect} from 'react';

import {useInvestment} from '../../hooks/investment';

import {Investment} from '../../interfaces';

import {FlatList, ListRenderItem, Alert, ActivityIndicator} from 'react-native';

import {Header, CustomText} from '../../components';
import ListItem from './components/ListItem';

import {Container, HeaderList, EmptyContainer} from './styles';
import {colors} from '../../styles';
import {navigate} from '../../services/navigation';

const Investments: React.FC = () => {
    const {investmentsRequest, investments, loading} = useInvestment();

    useEffect(() => {
        investmentsRequest().catch((error: Error) => {
            Alert.alert('Atenção', error.message);
        });
    }, [investmentsRequest]);

    const goNextPage = useCallback((item: Investment) => {
        if (item.indicadorCarencia === 'S') {
            Alert.alert(
                'Atenção',
                'Fundos de investimentos em carência não pode realizar resgate',
            );
        } else {
            navigate('GetInvestment', {investment: item});
        }
    }, []);

    const renderItems: ListRenderItem<Investment> = ({item}) => (
        <ListItem item={item} onPress={() => goNextPage(item)} />
    );

    const renderEmptyComponent = () => (
        <EmptyContainer>
            <CustomText type="primaryLarge">
                Nenhum investimento encontrado
            </CustomText>
        </EmptyContainer>
    );

    return (
        <Container>
            <Header>Resgate</Header>

            <HeaderList>
                <CustomText type="secondaryLarge">INVESTIMENTOS</CustomText>
                <CustomText type="secondaryLarge">R$</CustomText>
            </HeaderList>

            {loading && (
                <ActivityIndicator color={colors.primary} size={'large'} />
            )}

            <FlatList
                data={investments}
                keyExtractor={() => String(Math.random())}
                renderItem={renderItems}
                ListEmptyComponent={renderEmptyComponent}
            />
        </Container>
    );
};

export default Investments;
