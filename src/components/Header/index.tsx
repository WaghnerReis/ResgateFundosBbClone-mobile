import React from 'react';
import {View, ViewProps} from 'react-native';

import {Container, Title, Divider} from './styles';

const Header: React.FC<ViewProps> = ({children, ...props}) => {
    return (
        <View>
            <Container {...props}>
                <Title type="primaryLarge">{children}</Title>
            </Container>
            <Divider />
        </View>
    );
};

export default Header;
