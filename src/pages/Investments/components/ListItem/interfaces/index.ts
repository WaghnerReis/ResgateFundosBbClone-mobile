import {Investment} from '../../../../../interfaces';

export interface ItemProps {
    item: {nome: string; objetivo: string; saldoTotal: number};
    onPress: (item: Investment) => void;
}
