// import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {navigation} from './services';
import Routes from './routes';

const App = () => {
    return (
        <NavigationContainer ref={navigation.navigationRef}>
            <Routes />
        </NavigationContainer>
    );
};
export default App;
