import styled from 'styled-components/native';
import {TitleContainerProps} from './interfaces';

import {CustomText} from '../../components';

import {colors, metrics} from '../../styles';

export const Container = styled.View`
    flex: 1;
    background: ${colors.background};
`;

export const InfosSection = styled.ScrollView`
    flex: 1;
`;
export const ActionSection = styled.View``;

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

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background: ${colors.transparentBackground};
`;

export const ModalContent = styled.View`
    background: white;

    margin: ${metrics.paddingHorizontal};
`;

export const ModalTextsContainer = styled.View`
    align-items: center;

    margin: ${metrics.paddingHorizontal};
`;

export const ModalTitle = styled(CustomText)`
    font-size: 28px;

    color: ${colors.modalText};

    margin-bottom: ${metrics.paddingVertical};
`;

export const ModalMessage = styled(CustomText)`
    font-size: 18px;
    font-weight: 400;

    color: ${colors.modalText};

    margin-bottom: ${metrics.paddingHorizontal};
`;
