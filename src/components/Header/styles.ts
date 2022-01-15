import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';

import {CustomText} from '..';

export const Container = styled.View`
    justify-content: center;
    align-items: center;

    background: ${colors.primary};

    padding-top: ${metrics.paddingVertical};
    padding-right: ${metrics.paddingHorizontal};
    padding-bottom: ${metrics.paddingVertical};
    padding-right: ${metrics.paddingHorizontal};
`;

export const Title = styled(CustomText)`
    font-size: 20px;

    color: white;
`;

export const Divider = styled.View`
    height: 5px;
    background: ${colors.accent};
`;
