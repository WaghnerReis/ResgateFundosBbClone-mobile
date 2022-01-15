import React, {createContext, useCallback, useContext, useState} from 'react';

import {InputProps} from '../../interfaces';
import {TotalAmountContextData} from '../interfaces';

const TotalAmountContext = createContext<TotalAmountContextData>(
    {} as TotalAmountContextData,
);

export const TotalAmountProvider: React.FC = ({children}) => {
    const [registeredInputs, setRegisteredInputs] = useState<
        Map<string, number>
    >(new Map());
    const [totalAmount, setTotalAmount] = useState(0);

    const updateTotalAmount = useCallback(() => {
        let total = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [_, value] of registeredInputs) {
            total += value;
        }

        setTotalAmount(total);
    }, [registeredInputs]);

    const cleanCount = useCallback(() => {
        setRegisteredInputs(new Map<string, number>());
        setTotalAmount(0);
    }, []);

    const registerInputs = useCallback(
        (input: InputProps) => {
            registeredInputs.set(input.id, input.value);
            setRegisteredInputs(registeredInputs);
        },
        [registeredInputs],
    );

    const updateAmountValue = useCallback(
        (input: InputProps) => {
            registeredInputs.set(input.id, input.value);
            setRegisteredInputs(registeredInputs);

            updateTotalAmount();
        },
        [updateTotalAmount, registeredInputs],
    );

    return (
        <TotalAmountContext.Provider
            value={{
                totalAmount,
                registerInputs,
                updateTotalAmount,
                cleanCount,
                updateAmountValue,
            }}>
            {children}
        </TotalAmountContext.Provider>
    );
};

export function useTotalAmount(): TotalAmountContextData {
    const context = useContext(TotalAmountContext);
    return context;
}
