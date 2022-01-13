// import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {navigation} from './services';
import AppProvider from './hooks';
import Routes from './routes';

import {colors} from './styles';

const App = () => {
    return (
        <NavigationContainer ref={navigation.navigationRef}>
            <StatusBar backgroundColor={colors.primary} />
            <AppProvider>
                <Routes />
            </AppProvider>
        </NavigationContainer>
    );
};
export default App;
