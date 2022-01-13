import React from 'react';

import {HeaderProvider} from './header';

const AppProvider: React.FC = ({children}) => (
    <HeaderProvider>{children}</HeaderProvider>
);

export default AppProvider;
