import React from "react";
import './feature.css';
const Feature = ({title,text}) => {
    return(
        <div className="gpt3__feature">
         <div className="gpt3__feature-title">
            <div/>
          <h1>{title}</h1>
         </div>
         <div className="gpt3__feature-text">
          <p>{text}</p>
         </div>
      </div>
    )
}
export default Feature;