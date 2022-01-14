import React from 'react';
import {ButtomProps} from './interfaces';

import {Container, Text} from './styles';

const Buttom: React.FC<ButtomProps> = ({children, ...props}) => (
    <Container {...props}>
        <Text type="primaryLarge">{children}</Text>
    </Container>
);

export default Buttom;
