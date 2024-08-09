import React, { useState } from 'react';
import Resultarea from './resultarea'; 

function Textarea() { 

    const [text, setText] = useState(""); 
    const [result, setResult] = useState(""); 

    function handleUpClick(event) {
        event.preventDefault(); 
        setResult(text.toUpperCase()); 
        setText(""); 
    }

    function handleLowClick(event) {
        event.preventDefault(); 
        setResult(text.toLowerCase()); 
        setText(""); 
    }

    return (
        <div>
            <form>
                <h1>Enter your text here</h1>
                <textarea 
                    placeholder='Enter here!'
                    rows={8} 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleUpClick}>To Uppercase</button>
                <button onClick={handleLowClick}>To Lowercase</button>
            </form>
            <Resultarea text={result} /> 
        </div>
    );
}

export default Textarea;
