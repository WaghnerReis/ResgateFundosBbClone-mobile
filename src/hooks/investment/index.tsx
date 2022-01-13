import React, {createContext, useCallback, useContext, useState} from 'react';
import {Investment} from '../../interfaces';

import api from '../../services/api';

interface InvestmentContextData {
    loading: boolean;
    investments: Investment[];
    investmentsRequest(): Promise<void>;
}

const InvestmentContext = createContext<InvestmentContextData>(
    {} as InvestmentContextData,
);

export const InvestmentProvider: React.FC = ({children}) => {
    const [investments, setInvestments] = useState<Investment[]>([]);
    const [loading, setLoading] = useState(false);

    const investmentsRequest = useCallback(async () => {
        try {
            setLoading(true);

            const {data} = await api.get(
                '/ca4ec77d-b941-4477-8a7f-95d4daf7a653',
            );

            const {listaInvestimentos} = data.response.data;
            setInvestments(listaInvestimentos);
        } catch (err) {
            throw new Error('Erro ao se comunicacar com o servidor.');
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <InvestmentContext.Provider
            value={{
                loading,
                investments,
                investmentsRequest,
            }}>
            {children}
        </InvestmentContext.Provider>
    );
};

export function useInvestment(): InvestmentContextData {
    const context = useContext(InvestmentContext);
    return context;
}
