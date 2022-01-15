import React, {useState, useCallback, useRef, useEffect} from 'react';

import {useTotalAmount} from '../../../../hooks/totalAmount';
import {useInputError} from '../../../../hooks/inputError';

import {InputProps} from './interfaces';

import {Container, Title, TextArea, Divider, ErrorText} from './styles';

const Input: React.FC<InputProps> = ({
    id,
    title,
    initialValue,
    limit,
    formattedLimit,
    ...props
}) => {
    const {registerInputs, updateAmountValue} = useTotalAmount();
    const {addInputError, deleteInputError} = useInputError();

    const inputRef = useRef(null);

    const fixedInitialValue = initialValue.toFixed(2);

    const [error, setError] = useState('');
    const [value, setValue] = useState(fixedInitialValue);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const unformattedValue = inputRef.current?.getRawValue();

        updateAmountValue({id, value: unformattedValue});
    }, [id, updateAmountValue, value]);

    useEffect(() => {
        const unformattedValue = inputRef.current?.getRawValue();
        const fixedLimit = limit.toFixed(2);

        if (unformattedValue > fixedLimit) {
            setError(`Valor não pode ser maior que ${formattedLimit}`);
            addInputError({
                id,
                message: `${id}: Valor máximo de ${formattedLimit}`,
            });
        } else {
            setError('');
            deleteInputError(id);
        }
    }, [addInputError, deleteInputError, formattedLimit, id, limit, value]);

    useEffect(() => {
        registerInputs({id, value: parseFloat(fixedInitialValue)});
    }, [id, fixedInitialValue, registerInputs]);

    const handleChange = useCallback(
        (currentValue: string) => setValue(currentValue),
        [],
    );

    const getCorrectMode = useCallback(
        () => (isFocused ? 'focused' : 'blurred'),
        [isFocused],
    );

    return (
        <Container>
            <Title type="secondarySmall" mode={getCorrectMode()}>
                {title}
            </Title>

            <TextArea
                ref={inputRef}
                type="money"
                value={value}
                onChangeText={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />

            <Divider />

            {!!error && <ErrorText type="secondarySmall">{error}</ErrorText>}
        </Container>
    );
};

export default Input;
