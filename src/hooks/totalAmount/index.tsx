import React, {createContext, useCallback, useContext, useState} from 'react';
import {RegisterInputProps} from '../../interfaces';

interface TotalAmountContextData {
    totalAmount: number;
    setTotalAmountValue(value: number): void;
    initCount(): void;
    cleanCount(): void;
    registerInputs(input: RegisterInputProps): void;
}

const TotalAmountContext = createContext<TotalAmountContextData>(
    {} as TotalAmountContextData,
);

export const TotalAmountProvider: React.FC = ({children}) => {
    const [registeredInputs, setRegisteredInputs] = useState<
        Map<string, number>
    >(new Map());
    const [totalAmount, setTotalAmount] = useState(0);

    const initCount = useCallback(() => {
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
        (input: RegisterInputProps) => {
            registeredInputs.set(input.id, input.initialValue);
            setRegisteredInputs(registeredInputs);
        },
        [registeredInputs],
    );

    const setTotalAmountValue = useCallback(
        value => {
            setTotalAmount(totalAmount + value);
        },
        [totalAmount],
    );

    return (
        <TotalAmountContext.Provider
            value={{
                totalAmount,
                setTotalAmountValue,
                registerInputs,
                initCount,
                cleanCount,
            }}>
            {children}
        </TotalAmountContext.Provider>
    );
};

export function useTotalAmount(): TotalAmountContextData {
    const context = useContext(TotalAmountContext);
    return context;
}
