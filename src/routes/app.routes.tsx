import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Investiments from '../pages/Investiments';
import GetInvestiment from '../pages/GetInvestiment';

const AppStack = createNativeStackNavigator();

const defaultOptions = {
    headerShown: false,
};

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name="Investiments"
            component={Investiments}
            options={defaultOptions}
        />

        <AppStack.Screen
            name="GetInvestiment"
            component={GetInvestiment}
            options={defaultOptions}
        />
    </AppStack.Navigator>
);

export default AppRoutes;
