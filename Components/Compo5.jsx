import React from "react"

export class TestClass5 extends React.Component{
    render(){
        return(
            <>
                <div class = "CompoDiv">
                    <h3>Поточний час і дата</h3>
                    <p>{new Date().toLocaleString()}</p>
                </div>
            </>
        )
    }
}