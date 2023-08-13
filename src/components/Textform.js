import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Button was clicked.");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Button was clicked.");
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleCopy = () => {
        // console.log("Text copied to clipboard");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handleSpaces = () => {
        let newtext = text.split(/[]+/);
        setText(newtext.join(" "));
    }


    const resetOnClick = () => {
        console.log("Button was clicked.");
        let newText = ' ';
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here ");  

  return (
    <div>
        <div className='container'>
            <div className='mb-3'>
                <label htmlFor='myBox'><h1>{props.heading} </h1></label>
                <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='10' ></textarea>
            </div>
        </div>
        
        <button className ="btn btn-primary mx-1" onClick={handleUpClick} >convert to uppercase</button>
        <button className ="btn btn-primary mx-1" onClick={handleLoClick} >convert to Lowerercase</button>
        <button className ="btn btn-primary mx-1" onClick={resetOnClick} >reset</button>
        <button className ="btn btn-primary mx-1" onClick={handleCopy} >copy</button>
        <button className ="btn btn-primary mx-1" onClick={handleSpaces} >space hsnfler</button>
        
        <div className='container'> 
            <h2> Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} minutes to read </p>
        </div>
        <div className='container'>
        <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
