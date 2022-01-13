import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Investments from '../pages/Investments';
import GetInvestment from '../pages/GetInvestment';

const AppStack = createNativeStackNavigator();

const defaultOptions = {
    headerShown: false,
};

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name="Investments"
            component={Investments}
            options={defaultOptions}
        />

        <AppStack.Screen
            name="GetInvestment"
            component={GetInvestment}
            options={defaultOptions}
        />
    </AppStack.Navigator>
);

export default AppRoutes;
