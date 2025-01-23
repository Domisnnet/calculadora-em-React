import React, { useState, useCallback } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';
import './Calculator.css';

// Estado inicial da calculadora.
const initialState = {
    dispalyValue: '0', // Valor exibido no display.
    clearDisplay: false, // Flag para indicar se o display deve ser limpo ao digitar um novo número.
    operation: null, // Operação matemática selecionada (+, -, *, /).
    values: [0, 0], // Array para armazenar os valores para a operação.
    current: 0, // Índice do valor que está sendo inserido no momento (0 para o primeiro valor, 1 para o segundo).
};

// Função para realizar cálculos com base na operação selecionada.
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
            return val2; // Retorna o segundo valor se não houver operação.
    }
};

// Componente funcional Calculator.
const Calculator = () => {
    // Gerenciamento do estado da calculadora.
    const [state, setState] = useState(initialState);

    // Atualiza o valor exibido no display.
    const updateDisplayValue = useCallback((newValue) => {
        setState(prevState => ({ ...prevState, dispalyValue: newValue }))
    }, [setState])

    // Adiciona um dígito ao display e atualiza o estado.
    const addDigit = useCallback(n => {
        // Impede a adição de múltiplos pontos decimais.
        if (n === '.' && state.dispalyValue.includes('.')) {
            return;
        }

        // Determina se o display deve ser limpo antes de adicionar o novo dígito.
        const clearDisplay = state.dispalyValue === '0' || state.clearDisplay;
        const currentValue = clearDisplay ? '' : state.dispalyValue;
        const dispalyValue = currentValue + n;

        updateDisplayValue(dispalyValue)

        setState(prevState => ({ ...prevState, clearDisplay: false }));

        // Atualiza o valor correspondente no array 'values'.
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
        // Se nenhuma operação foi selecionada ainda.
        if (state.operation === null){
            // Atualiza o estado com a nova operação e o valor do display.
            setState(prevState => ({ ...prevState, operation: op, current: 1, clearDisplay: true, values: [parseFloat(state.dispalyValue), 0] }));
        } else{
            // Determina se a operação é o sinal de igual (=) para finalizar o cálculo.
             const finish = op === '=';
            // Realiza o cálculo com os valores armazenados. 
             const result = calculate(state.values[0], state.operation, state.values[1]);

            // Verificação de NaN e Infinity para tratamento de erros.
              if (isNaN(result) || !isFinite(result)) {
                 setState(initialState); // Reseta o estado para o estado inicial em caso de erro.
                 updateDisplayValue("Erro")
                 return;
             }
            // Atualiza o display com o resultado do cálculo. 
            updateDisplayValue(result.toString());
            // Atualiza o estado com o resultado do cálculo, reseta a operação e prepara para a próxima entrada. 
            setState(prevState => ({
                ...prevState,
                operation: finish ? null : op,
                current: finish ? 0 : 1,
                clearDisplay: !finish,
                values: [result, 0]
            }));
        }
    }, [state, updateDisplayValue, setState]); // Remova clearMemory aqui

    // Limpa a memória da calculadora e reseta o estado.
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