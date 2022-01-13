import React, {useMemo} from 'react';

import {formatter} from '../../../../util';
import {ItemProps} from './interfaces';

import {View} from 'react-native';
import {CustomText} from '../../../../components';

import {Container} from './styles';

const ListItem: React.FC<ItemProps> = ({item, onPress}) => {
    const formattedValue = useMemo(
        () => formatter.numberToCurrencyWithR$(item.saldoTotal),
        [item.saldoTotal],
    );

    return (
        <Container onPress={onPress}>
            <View>
                <CustomText type="primaryLarge">{item.nome}</CustomText>
                <CustomText type="secondarySmall">{item.objetivo}</CustomText>
            </View>

            <CustomText type="primaryLarge">{formattedValue}</CustomText>
        </Container>
    );
};

export default ListItem;
