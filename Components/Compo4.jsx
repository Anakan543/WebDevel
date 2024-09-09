import React from "react";

export class TestClass4 extends React.Component{
    render(){
        return(
            <>
                <div class = "CompoDiv">
                    <h3>Поточна дата</h3>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
            </>
        )
    }
}