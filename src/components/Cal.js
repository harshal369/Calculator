import React, { useState } from "react"
import ButtonMaker from "./ButtonMaker"
import "./Cal.css"

const Cal = () =>{

    const [currentExp, setCurrentExp] = useState(0);
    const [saveValue, setSaveValue] = useState(0);
    const [currentOperation, setCurrentOperation] = useState("");
    const calButton =[
        [
        {
            value : 1,
            calFun: () =>{
                console.log(currentExp)
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+1) )   ;
             }
        },
        {
            value:2,
            calFun:()=>{
                setCurrentExp( (prevState)=>   parseFloat( prevState.toString()+2) )    ;
            }
        },
        {
            value:3,
            calFun:()=>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+3)    );
            }
        },
        {
            value:"+",
            calFun:()=>{
                setSaveValue(currentExp);
                setCurrentOperation("+");
                setCurrentExp(0);
            }
        }
    ],
    [
        {
            value : 4,
            calFun: () =>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+4)    );
             }
        },
        {
            value:5,
            calFun:()=>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+5)    );
            }
        },
        {
            value:6,
            calFun:()=>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+6)    );   
            }
        },
        {
            value:"-",
            calFun:()=>{
                setSaveValue(currentExp);
                setCurrentOperation("-");
                setCurrentExp(0); 
            }
        }
    ],
    [
        {
            value : 7,
            calFun: () =>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+7)    );
             }
        },
        {
            value:8,
            calFun:()=>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+8)    );
            }
        },
        {
            value:9,
            calFun:()=>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+9)    ); 
            }
        },
        {
            value:"*",
            calFun:()=>{
                setSaveValue(currentExp);
                setCurrentOperation("*");
                setCurrentExp(0);
            }
        }
    ],
    [
        {
            value : " x2",
            calFun: () =>{
                setCurrentExp(currentExp*currentExp);
             }
        },
        {
            value:0,
            calFun:()=>{
                setCurrentExp( (prevState)=>  parseFloat( prevState.toString()+0)    );
            }
        },
        {
            value:".",
            calFun:()=>{

                setCurrentExp( (prevState)=> prevState.toString()+ "."    ); 
            }
        },
        {
            value:"/",
            calFun:()=>{
                setSaveValue(currentExp);
                setCurrentOperation("/");
                setCurrentExp(0);
            }
        }
        
    ],
    [
        {
            value:"=",
            calFun:()=>{
                    if(currentOperation === "+"){
                            setCurrentExp(parseFloat(saveValue) + parseFloat(currentExp) );
                        
                    }else if(currentOperation === "-"){
                            setCurrentExp(parseFloat(saveValue) - parseFloat(currentExp) );
                            
                    }else if(currentOperation === "*"){
                        setCurrentExp(parseFloat(saveValue) * parseFloat(currentExp) );

                    }else if(currentOperation === "/"){
                        setCurrentExp(parseFloat(saveValue) / parseFloat(currentExp) );

                    }
                }
            },        
        {
            value:"CLR",
            calFun:()=>{
                setCurrentExp(0);
                setCurrentOperation("");
                setSaveValue(0);
            }
        }
    ]
   
    
    ]

    return(
        <div className="cal-comp">
        <div className="cal-button-wrapper">
            
            <input type="text" value={currentExp} />
            <ButtonMaker calButton={calButton}/>
        </div>
        </div>
    
    );
        
}
export default Cal;
