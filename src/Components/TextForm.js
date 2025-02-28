import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleBoClick = () => {
    let a = text.bold();
    setText(a);
  }
  
  const handleClClick = () => {
    let a = '';
    setText(a);
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upeer Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleBoClick}>Convert To Bold</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p><b>{text.split(" ").length}</b> Words , <b>{text.length}</b> Characters</p>
      <p><b>{0.008 * text.split("").length}</b> Minutes to read</p>
      <h2>Preview :</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
