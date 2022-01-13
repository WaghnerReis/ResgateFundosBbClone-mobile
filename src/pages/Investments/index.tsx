import React from 'react';

import {FlatList} from 'react-native';

import ListItem from './components/ListItem';
import {Header, CustomText} from '../../components';

import {Container, HeaderList} from './styles';

const Investments: React.FC = () => {
    const data = [
        {
            nome: 'INVESTIMENTO I',
            objetivo: 'Minha aposentadoria',
            saldoTotal: 39321.29,
        },
        {
            nome: 'INVESTIMENTO II',
            objetivo: 'Viajem dos sonhos',
            saldoTotal: 7300,
        },
        {
            nome: 'INVESTIMENTO III',
            objetivo: 'Abrir meu próprio negócio',
            saldoTotal: 26000,
        },
        {
            nome: 'INVESTIMENTO IV',
            objetivo: 'Investimento em carencia',
            saldoTotal: 44000,
        },
    ];

    const renderItems = ({item}) => <ListItem item={item} />;

    return (
        <Container>
            <Header>Resgate</Header>

            <HeaderList>
                <CustomText type="secondaryLarge">INVESTIMENTOS</CustomText>
                <CustomText type="secondaryLarge">R$</CustomText>
            </HeaderList>

            <FlatList
                data={data}
                keyExtractor={item => String(Math.random())}
                renderItem={renderItems}
            />
        </Container>
    );
};

export default Investments;
