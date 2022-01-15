import React, {createContext, useCallback, useContext, useState} from 'react';

import {ErrorInputProps} from '../../interfaces';
import {InputErrorContextData} from '../interfaces';

const InputErrorContext = createContext<InputErrorContextData>(
    {} as InputErrorContextData,
);

export const InputErrorProvider: React.FC = ({children}) => {
    const [errors, setErrors] = useState<Map<string, string>>(new Map());

    const addInputError = useCallback(
        (error: ErrorInputProps) => {
            errors.set(error.id, error.message);
            setErrors(errors);
        },
        [errors],
    );

    const deleteInputError = useCallback(
        (id: string) => {
            errors.delete(id);
        },
        [errors],
    );

    return (
        <InputErrorContext.Provider
            value={{
                errors,
                addInputError,
                deleteInputError,
            }}>
            {children}
        </InputErrorContext.Provider>
    );
};

export function useInputError(): InputErrorContextData {
    const context = useContext(InputErrorContext);
    return context;
}
