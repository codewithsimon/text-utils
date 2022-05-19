import React, { useState } from 'react'

export default function (props) {
    const [text, setText] = useState("");
    // setText = ("Hello");

    const handleUpClick = ()=>{
        // console.log("Upper Case was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("info","Text is Capitalized Now!");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("info","Text is now in lower case!");
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("warning","Textbox Cleared");
    }

    const handleOnChange = (event)=>{
        // console.log("Handle on Changed is Fired");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container">
            <h1 className="h1">{props.heading}</h1>
            <label className="form-label" htmlFor="myBox">Enter your text below:</label>
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="10" />
            <button type="btn" onClick={handleUpClick} className="btn btn-primary my-3 mx-2">Change to Upercase</button>
            <button type="btn" onClick={handleLowClick} className="btn btn-primary my-3 mx-2">Change to Lowercase</button>
            <button type="btn" onClick={handleClearClick} className="btn btn-warning my-3 mx-2">Clear Text</button>
        </div>

        <div className="container my-2">
            <h2 className="h2">Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes to read.</p>
            <h3 className="h3">Preview</h3>
            <p>{text.length>0?text:"Enter Something in the textbox to preview it here :)"}</p>
        </div>

        </>
    )
}
