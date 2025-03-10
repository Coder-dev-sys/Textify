import React from 'react'

export default function About(props) {
    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#143D60',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (    
        <div className="container">
            <h1 className="my-4" style={{color: props.mode === 'dark' ? 'white' : '#143D60'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils Gives You A Way To Analyze Your Text Quickly And Efficiently. Be It Word Count , Character Couter etc ...    
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils Is A Free Character Counter Tool That Provides Instant Character Count & Word Count Statistics For A Given Text. TextUtils Reports The Number Of Words And Characters. Thus it is Suitable For Writing Text With Word / Character Limit.    
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This Word Counter Software Works in Any Web Browser Such As Chrome , Firefox , Internet Explorer , Safari , Opera. It Suits To Count Characters in Facebook , Blogs , Books , Excel Documents , Pdf Documents , Essays  etc ...    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
