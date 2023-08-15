import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     border: "2px solid gray"
    // })
    let myStyle = {
        color: props.mode === 'dark'? 'white': 'black',
        backgroundColor: props.mode === 'dark'? '#042743': 'white',
        // border: '2px solid',
    }
  return (
    
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion bg-dark" id="accordionExample">
             <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong> 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    UL-Conerter gives you a way to analyze your text quickly and effieciently.Be it word count or change the words and sentences to uppercase or lowercase as per the way you want. 
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong> 
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    UL-Converter is a free character counter tool that provides instant character  and word count statistics for a given text. UL-Converter reports the number of words and characters.thus it is suitable for writing text with word/ character limits.
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong> 
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word cocunter softwareworks in any web browsers succh as Chrome, Fiirefox, Internet Explorer, Safari, Opera, Brave. It suits to count characters in facebook, blogs, books, excel documents, PDF documents, essays, etc.
                    </div>
                </div>
                
         </div>
        </div> 

        {/* <div className='container my-3'>
            <button className="btn btn-outline-primary" onClick={toggleStyle} type="button">{btntext}</button>
        </div> */}
    </div>
  )
}
