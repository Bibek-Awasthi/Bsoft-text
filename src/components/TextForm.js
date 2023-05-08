import  React,{useState} from 'react';

export default function TextForm(props) {
    const handleCopy=()=>{
 let content = document.getElementById("txtarea");
 content.select();
//  content.setSelectionRange(0,99999);
 navigator.clipboard.writeText(content.value);
 props.showAlert("Copied to clipboard...","Success");
    }
    const removeExtraSpace= ()=>{
      let txt = text.split(/[  ]+/);
      setText(txt.join(" "));
      props.showAlert("You got rid of extra spaces!!","Success");
    }
    const handleUpClick=()=>{
        console.log("ckickkkkeds");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to Uppercase","Success");
    }
   const handleLowClick=()=>{
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Text converted to lowercase","Success");
   }
   const handleClear = ()=>{
    setText("");
    props.showAlert("Oops! you have deleted the text**","Success");
   }
    function handleChange(event) {
       setText(event.target.value);
      }
    const [text,setText]=useState('Enter the text here');
    
  return (
    <>
<div className="container container-fluid" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea name="firstName"  onChange={handleChange} style={{backgroundColor: props.mode==='light'?'grey':'white'}} value={text} rows="12" cols={34} id="txtarea"> </textarea>
</div>
<button className='btn btn-primary  mx-3 my-2' onClick={handleUpClick}>Covert to Uppercase</button>
<button className="btn btn-primary mx-3 mx-3 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3 mx-3 my-2" onClick={handleCopy}>Copy📑</button>
<button className="btn btn-primary mx-3 mx-3 my-2" onClick={removeExtraSpace}>✂ Spaces</button>
<button className="btn btn-danger mx-3 mx-3 my-2" onClick={handleClear}>Clear</button>
</div>
<div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary:</h1>
  <p>{text.split(" ").length-1} words, {text.length} characters and {(text.split("").length)*0.0083} minutes to read...</p>
  <h2>Preview</h2>
  <p>{text?text:"Enter smth to see preview..."}</p>
</div>
</>
  )
}
