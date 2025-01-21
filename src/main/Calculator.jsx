import React, { Component } from 'react';
import Display from '../components/Display';
import Button from '../components/Button';

import './Calculator.css';

export default class Calculator extends Component {
    addDigit = (n) => {
      
    }

    setOperation = (op) => {
        
    }

    clearMemory = () => {

    }

  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op); 

    return (
      <div className="calculator">
        <Display value={"100"} />
        <Button Label="AC" click={() => this.clearMemory()} triple />
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
  }
}