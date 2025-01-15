import React from "react";
import './Display.css'

const Button = (props) => {
    return (
      <div className="display">{props.value}</div>
    );
  };
  
  export default Button;