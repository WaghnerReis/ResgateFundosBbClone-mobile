import {TextInputProps, TextProps} from 'react-native';

export interface TitleProps extends TextProps {
    mode: 'focused' | 'blurred';
}

export interface InputProps extends TextInputProps {
    id: string;
    title: string;
    initialValue: number;
    limit: number;
    formattedLimit: string;
}
