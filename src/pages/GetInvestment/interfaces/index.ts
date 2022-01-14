import {Investment, Stock} from '../../../interfaces';

export interface GetInvestimentProps {
    route: {
        params: {
            investment: Investment;
        };
    };
}

export interface ItemProps {
    item: Stock;
    investment: Investment;
}

export interface TitleContainerProps {
    paddingTop?: boolean;
}
