import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';

import './Calculator.css';

export default class Calculator extends Component {
    addDigit = (n) => {
      console.log(n);
    }

    setOperation = (op) => {
        console.log(op);
    }

    clearMemory = () => {

    }

  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op); // <== Corrigido 'n' por 'op'

    return (
      <div className="calculator">
        <Display value={"100"} />
        <Button Label="AC" click={() => this.clearMemory()} triple />
        <Button Label="/" click={() => setOperation('/')} operation />  {/*  <== Propriedade Operation Adicionada */}
        <Button Label="7" click={() => addDigit('7')} />
        <Button Label="8" click={() => addDigit('8')} /> {/*  <== Propriedade click Adicionada */}
         <Button Label="9" click={() => addDigit('9')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="*" click={() => setOperation('*')} operation />   {/*  <== Propriedade Operation Adicionada */}
        <Button Label="4" click={() => addDigit('4')} /> {/*  <== Propriedade click Adicionada */}
         <Button Label="5" click={() => addDigit('5')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="6" click={() => addDigit('6')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="-" click={() => setOperation('-')} operation />    {/*  <== Propriedade Operation Adicionada */}
         <Button Label="1" click={() => addDigit('1')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="2" click={() => addDigit('2')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="3" click={() => addDigit('3')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="+" click={() => setOperation('+')} operation /> {/*  <== Propriedade Operation Adicionada */}
        <Button Label="0" click={() => addDigit('0')} double />  {/*  <== Propriedade click Adicionada */}
        <Button Label="." click={() => addDigit('.')} /> {/*  <== Propriedade click Adicionada */}
        <Button Label="=" click={() => setOperation('=')} operation /> {/*  <== Propriedade Operation Adicionada */}
      </div>
    );
  }
}