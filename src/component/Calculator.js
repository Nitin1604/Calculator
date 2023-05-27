import { useState } from "react";

const Calculator = () => {

    // useState for Addition of two numbers
    const [inputA, setInputA] = useState(10);  
    const [inputB, setInputB] = useState(10); 
    const result = parseInt(inputA) + parseInt(inputB);
    
    // useState for Subtraction of two numbers
    const [input_a, setinput_a] = useState(40);  
    const [input_b, setinput_b] = useState(20);  
    const Result = parseInt(input_a) - parseInt(input_b);
    
    // useState for multiplication of two numbers
    const [INPUTa, setINPUTa] = useState(20);  
    const [INPUTb, setINPUTb] = useState(10);  
    const resultant = parseInt(INPUTa) * parseInt(INPUTb);
    
    // useState for division of two numbers
    const [InputAA, setInputAA] = useState(20);  
    const [InputBB, setInputBB] = useState(10);  
    const RESULT = parseInt(InputAA) / parseInt(InputBB);

// function handling Input A (+)
function handleInputA(event) {
    setInputA(event.target.value);
}

// function handling Input B (+)
function handleInputB(event) {
    setInputB(event.target.value);
}

// function handling Input a (-)
function handleinput_a(event) {
    setinput_a(event.target.value);
}

// function handling Input b (-)
function handleinput_b(event) {
    setinput_b(event.target.value);
}
// function handling Input a (*)
function handelINPUTa(event) {
    setINPUTa(event.target.value);
}
// function handling Input b (*)
function handelINPUTb(event) {
    setINPUTb(event.target.value);
}

// function handling Input AA (/)
function handelInputAA(event) {
    setInputAA(event.target.value);
}
// function handling Input BB (/)
function handelInputBB(event) {
    setInputBB(event.target.value);
}
return (
        <div>
            <hr/>
            <h1>Calculator in browser Tab</h1>
            {/* " + " operation for variable a and b */}
            <input type="text" name="a" placeholder="input the value of a" value={inputA} onChange={handleInputA}/>
            {" + "}
            <input type="text" name="b" placeholder="input the value of b" value={inputB} onChange={handleInputB}/>
            <span>{" = "}{result}</span>
            <br></br>

            {/* " - " operation for variable a and b */}
           <input type="text" name="a" placeholder="input the value of a" value={input_a} onChange={handleinput_a}/> 
           {" - "}
            <input type="text" name="b" placeholder="input the value of b" value={input_b} onChange={handleinput_b}/>
            <span>{" = "}{Result}</span>
            <br></br>

            {/* " (*) " operation for variable a and b */}
           <input type="text" name="a" placeholder="input the value of a" value={INPUTa} onChange={handelINPUTa}/> 
           {" * "}
            <input type="text" name="b" placeholder="input the value of b" value={INPUTb} onChange={handelINPUTb}/>
            <span>{" = "}{resultant}</span>
            <br></br>

            {/* " ( / )" operation for variable a and b */}
           <input type="text" name="a" placeholder="input the value of a" value={InputAA} onChange={handelInputAA}/> 
           {" / "}
            <input type="text" name="b" placeholder="input the value of b" value={InputBB} onChange={handelInputBB}/>
            <span>{" = "}{RESULT}</span>
        </div>
    )
}

export default Calculator;