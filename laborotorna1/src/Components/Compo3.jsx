import React from "react";

export class TestClass3 extends React.Component{
    render(){
        return(
            <>
                <div class = "CompoDiv">
                    <h3>Поточний час</h3>
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
            </>
        )
    }
}