import React from 'react';

import {InvestmentProvider} from './investment';
import {TotalAmountProvider} from './totalAmount';

const AppProvider: React.FC = ({children}) => (
    <TotalAmountProvider>
        <InvestmentProvider>{children}</InvestmentProvider>
    </TotalAmountProvider>
);

export default AppProvider;
