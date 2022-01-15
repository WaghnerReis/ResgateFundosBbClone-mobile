import React from 'react';

import {InvestmentProvider} from './investment';
import {TotalAmountProvider} from './totalAmount';
import {InputErrorProvider} from './inputError';

const AppProvider: React.FC = ({children}) => (
    <TotalAmountProvider>
        <InputErrorProvider>
            <InvestmentProvider>{children}</InvestmentProvider>
        </InputErrorProvider>
    </TotalAmountProvider>
);

export default AppProvider;
