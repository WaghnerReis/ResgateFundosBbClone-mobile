import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';
import {TitleContainerProps} from './interfaces';

export const Container = styled.ScrollView`
    background: ${colors.background};
`;

export const TitleContainer = styled.View`
    padding-top: ${(props: TitleContainerProps) =>
        props.paddingTop ? metrics.paddingHorizontal : 0};
    padding-right: ${metrics.paddingHorizontal};
    padding-bottom: ${metrics.paddingHorizontal};
    padding-left: ${metrics.paddingHorizontal};
`;

export const InvestmentData = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-right: ${metrics.paddingHorizontal};
`;
