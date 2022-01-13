import React from 'react';
import {View} from 'react-native';

import {Container, Title, Divider} from './styles';

const Header: React.FC = ({children, ...props}) => {
    return (
        <View>
            <Container {...props}>
                <Title>{children}</Title>
            </Container>
            <Divider />
        </View>
    );
};

export default Header;
