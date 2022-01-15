import styled from 'styled-components/native';
import {css} from 'styled-components';

import {TextInputMask} from 'react-native-masked-text';

import {TitleProps} from './interfaces';

import {CustomText} from '../../../../components';

import {colors, metrics} from '../../../../styles';

const titleTypeVariations = {
    focused: css`
        color: ${colors.primary};
    `,
    blurred: css`
        color: ${colors.secondaryText};
    `,
};

export const Container = styled.View``;

export const Title = styled(CustomText)`
    font-weight: 700;

    margin-top: ${metrics.paddingVertical};

    ${(props: TitleProps) => titleTypeVariations[props.mode]}
`;

export const TextArea = styled(TextInputMask)`
    font-size: 20px;
    font-weight: 700;

    color: ${colors.primaryText};

    padding: 0;
`;

export const Divider = styled.View`
    height: 1px;

    background: ${colors.background};
`;

export const ErrorText = styled(CustomText)`
    font-weight: 900;

    color: ${colors.error};
`;
