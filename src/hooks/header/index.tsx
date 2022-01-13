import React, {createContext, useCallback, useContext, useState} from 'react';

interface HeaderContextData {
    title: string;
    setTitleValue(value: string): void;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({children}) => {
    const [title, setTitle] = useState('');

    const setTitleValue = useCallback(value => {
        setTitle(value);
    }, []);

    return (
        <HeaderContext.Provider value={{title, setTitleValue}}>
            {children}
        </HeaderContext.Provider>
    );
};

export function useHeader(): HeaderContextData {
    const context = useContext(HeaderContext);
    return context;
}
