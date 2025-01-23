import React from 'react';
import './Button.css';

const Button = props => {
  const classes = ['button'];

  if (props.operation) {
    classes.push('operation');
  }

  if (props.double) {
    classes.push('double');
  }

  if (props.triple) {
    classes.push('triple');
  }

  return (
    <button onClick={props.click} className={classes.join(' ')}>
        {props.Label} 
    </button>
  );
};

export default Button;