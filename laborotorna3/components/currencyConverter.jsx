import React from "react";

export const CurrencyConverter = (props) =>{
    return (
    <input className = "dollarInput"type="text" name="dollarInput" disabled
    value={props.valueConverted}
    />
    )   
}