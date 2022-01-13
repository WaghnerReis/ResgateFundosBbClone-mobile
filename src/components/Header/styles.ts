import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';

export const Container = styled.View`
    justify-content: center;
    align-items: center;

    background: ${colors.primary};

    padding-top: ${metrics.paddingVertical};
    padding-right: ${metrics.paddingHorizontal};
    padding-bottom: ${metrics.paddingVertical};
    padding-right: ${metrics.paddingHorizontal};
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;

    color: white;
`;

export const Divider = styled.View`
    height: 5px;
    background: ${colors.accent};
`;
