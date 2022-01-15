import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';

import {CustomText} from '..';

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    background: ${colors.accent};

    padding: ${metrics.paddingHorizontal};
`;

export const Text = styled(CustomText)`
    color: ${colors.primary};
`;
