import React from 'react';

import {navigation} from '../../services';

import {Text, TouchableOpacity, View} from 'react-native';

// import { Container } from './styles';

const Investiments: React.FC = () => {
    return (
        <View>
            <Text>This is a Investiment Screen</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('GetInvestiment');
                }}>
                <Text>GO NEXT SCREEN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Investiments;
