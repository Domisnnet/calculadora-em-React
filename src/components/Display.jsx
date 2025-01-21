import React from "react";
import '../components/Display.css'

const Display= (props) => {
    return (
      <div className="display">{props.value}</div>
    );
  };
  
  export default Display;