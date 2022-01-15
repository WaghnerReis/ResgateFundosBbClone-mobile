import {ErrorInputProps, Investment, InputProps} from '../../interfaces';

export interface InputErrorContextData {
    errors: Map<string, string>;
    addInputError(error: ErrorInputProps): void;
    deleteInputError(id: string): void;
}

export interface InvestmentContextData {
    loading: boolean;
    investments: Investment[];
    investmentsRequest(): Promise<void>;
}

export interface TotalAmountContextData {
    totalAmount: number;
    updateTotalAmount(): void;
    cleanCount(): void;
    registerInputs(input: InputProps): void;
    updateAmountValue(input: InputProps): void;
}
