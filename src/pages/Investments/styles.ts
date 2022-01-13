import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';

export const Container = styled.View`
    background: ${colors.background};
`;

export const HeaderList = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background: ${colors.background};

    padding: ${metrics.paddingHorizontal};
`;

export const EmptyContainer = styled.View`
    justify-content: center;
    align-items: center;

    padding: ${metrics.paddingHorizontal};
`;
