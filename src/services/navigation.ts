import React from 'react';

import {NavigationContainerRef, ParamListBase} from '@react-navigation/native';

export const navigationRef =
    React.createRef<NavigationContainerRef<ParamListBase>>();

export const navigate = (routeName: string, params: Object = {}) => {
    navigationRef.current?.navigate(routeName, params);
};

export const goBack = () => {
    navigationRef.current?.goBack();
};
