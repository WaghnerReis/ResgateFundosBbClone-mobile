import React from 'react';

import {InvestmentProvider} from './investment';

const AppProvider: React.FC = ({children}) => (
    <InvestmentProvider>{children}</InvestmentProvider>
);

export default AppProvider;
