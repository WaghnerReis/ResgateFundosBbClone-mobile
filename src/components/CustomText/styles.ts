import styled from 'styled-components/native';
import {css} from 'styled-components';

import {CustomTextProps} from './interfaces';
import {colors} from '../../styles';

const customTextTypeVariations = {
    primarySmall: css`
        font-size: 16px;
        font-weight: 700;

        color: ${colors.primaryText};
    `,
    primaryLarge: css`
        font-size: 18px;
        font-weight: bold;

        color: ${colors.primaryText};
    `,
    secondarySmall: css`
        font-size: 14px;

        color: ${colors.secondaryText};
    `,
    secondaryLarge: css`
        font-size: 16px;
        font-weight: bold;

        color: ${colors.secondaryText};
    `,
};

export const Text = styled.Text<CustomTextProps>`
    ${(props: CustomTextProps) => customTextTypeVariations[props.type]}
`;
