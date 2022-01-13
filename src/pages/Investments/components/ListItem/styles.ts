import styled from 'styled-components/native';
import {metrics} from '../../../../styles';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;

    background: white;

    padding: ${metrics.paddingHorizontal};
    margin-bottom: 2px;
`;
