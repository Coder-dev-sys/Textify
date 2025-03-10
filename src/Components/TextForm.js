import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleCopy = () => {
    var text=document.getElementById("myBox"); 
    text.select();
    // navigator.clipboard.writeText(text.value); - for pc only
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
    }
    else {
      document.execCommand('copy');
    }
    
    props.showAlert("Copied to clipboard","success");
  }
  
  const handleClClick = () => {
    let a = '';
    setText(a);
    props.showAlert("Cleared","success");
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1 className='mb-3'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: (props.mode === 'dark' ? 'rgb(36 74 104)' : 'white') , color:(props.mode === 'dark' ? 'white' : 'black')}} rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{backgroundColor: '#7886C7'}} onClick={handleUpClick}>Convert To Upeer Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{backgroundColor: '#7886C7'}} onClick={handleLoClick}>Convert To Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{backgroundColor: '#7886C7'}} onClick={handleCopy}>Copy</button>
      <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" style={{backgroundColor: '#7886C7'}} onClick={handleClClick}>Clear</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p><b>{text.split(" ").filter(word => word.trim() !== "").length}</b> words , <b>{text.length}</b> Characters</p>
      <p><b>{0.008 * text.split("").length}</b> Minutes to read</p>
      <h2>Preview :</h2>
      <p>{text.length > 0 ? text : "Nothing To Preview ..."}</p>
    </div>
    </>
  )
}
