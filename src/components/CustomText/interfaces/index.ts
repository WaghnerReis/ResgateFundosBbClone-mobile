import {TextProps} from 'react-native';

export interface CustomTextProps extends TextProps {
    type: 'primarySmall' | 'primaryLarge' | 'secondarySmall' | 'secondaryLarge';
}
