import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Text} from './styles';

const Button: React.FC<TouchableOpacityProps> = ({children, ...props}) => (
    <Container {...props}>
        <Text type="primaryLarge">{children}</Text>
    </Container>
);

export default Button;
