import React from "react";
import { TestClass3 } from "./Compo3";
import { TestClass4 } from "./Compo4";
import { TestClass5 } from "./Compo5";
export class TestClass2 extends React.Component{
    render(){
        return(
            <>
                <div class = "Compo2Div">
                    <TestClass3></TestClass3>
                    <TestClass4></TestClass4>
                    <TestClass5></TestClass5>
                </div>
            </>
        )
    }
}