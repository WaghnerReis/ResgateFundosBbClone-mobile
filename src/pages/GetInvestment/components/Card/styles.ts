import styled from 'styled-components/native';

import {metrics} from '../../../../styles';

export const Container = styled.View`
    background: white;

    padding-top: ${metrics.paddingVertical};
    padding-bottom: ${metrics.paddingVertical};
    padding-left: ${metrics.paddingHorizontal};
    margin-bottom: ${metrics.paddingHorizontal};
`;
