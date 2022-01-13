import React from 'react';

import {CustomTextProps} from './interfaces';

import {Text} from './styles';

const CustomText: React.FC<CustomTextProps> = ({children, ...props}) => {
    return <Text {...props}>{children}</Text>;
};

export default CustomText;
