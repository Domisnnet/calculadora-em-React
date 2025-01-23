import React, { useState, useCallback } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import './Calculator.css';

const initialState = {
    dispalyValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
};

const calculate = (val1, operation, val2) => {
    switch (operation) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        default:
            return val2;
    }
};

const Calculator = () => {
    const [state, setState] = useState(initialState);

    const updateDisplayValue = useCallback((newValue) => {
        setState(prevState => ({ ...prevState, dispalyValue: newValue }))
    }, [setState])

    const addDigit = useCallback(n => {
        if (n === '.' && state.dispalyValue.includes('.')) {
            return;
        }

        const clearDisplay = state.dispalyValue === '0' || state.clearDisplay;
        const currentValue = clearDisplay ? '' : state.dispalyValue;
        const dispalyValue = currentValue + n;

        updateDisplayValue(dispalyValue)

        setState(prevState => ({ ...prevState, clearDisplay: false }));

        if (n !== '.') {
            const newValue = parseFloat(dispalyValue);
            setState(prevState => {
                const newValues = [...prevState.values];
                newValues[prevState.current] = newValue;
                return { ...prevState, values: newValues };
            });
        }
    }, [state.clearDisplay, state.dispalyValue, updateDisplayValue, setState]);

    const setOperation = useCallback(op => {
        if (state.current === 0) {
            setState(prevState => ({ ...prevState, operation: op, current: 1, clearDisplay: true }));
        } else {
            const finish = op === '=';
            const result = calculate(state.values[0], state.operation, state.values[1]);
            
            updateDisplayValue(result.toString());

            setState(prevState => ({
                ...prevState,
                operation: finish ? null : op,
                current: finish ? 0 : 1,
                clearDisplay: !finish,
                values: [result, 0]
            }));
        }
    }, [state, updateDisplayValue, setState]);

    const clearMemory = useCallback(() => {
        setState({ ...initialState });
    }, [setState]);

    return (
        <div className="calculator">
            <Display value={state.dispalyValue} />
            <Button Label="AC" click={clearMemory} triple />
            <Button Label="/" click={() => setOperation('/')} operation />
            <Button Label="7" click={() => addDigit('7')} />
            <Button Label="8" click={() => addDigit('8')} />
            <Button Label="9" click={() => addDigit('9')} />
            <Button Label="*" click={() => setOperation('*')} operation />
            <Button Label="4" click={() => addDigit('4')} />
            <Button Label="5" click={() => addDigit('5')} />
            <Button Label="6" click={() => addDigit('6')} />
            <Button Label="-" click={() => setOperation('-')} operation />
            <Button Label="1" click={() => addDigit('1')} />
            <Button Label="2" click={() => addDigit('2')} />
            <Button Label="3" click={() => addDigit('3')} />
            <Button Label="+" click={() => setOperation('+')} operation />
            <Button Label="0" click={() => addDigit('0')} double />
            <Button Label="." click={() => addDigit('.')} />
            <Button Label="=" click={() => setOperation('=')} operation />
        </div>
    );
};

export default Calculator;