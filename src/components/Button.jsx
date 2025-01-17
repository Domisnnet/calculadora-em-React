import React from 'react';
import './Button.css';

const Button = (props) => {
  const classes = ['button'];

  if (props.operation) classes.push('operation');
  if (props.double) classes.push('double');
  if (props.triple) classes.push('triple');

  return (
    <button 
      className={classes.join(' ')}
      onClick={(e) => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  );
};

export default Button;