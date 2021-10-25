import React from 'react'

const HeadingTag = () => {
    return (
        <> 
            {/* here i make Header with clickable name
                with the help of a tah if anyone clicke
                on the header name it willl render the same page 
             */}
            <div className="Main_heading_tag">

                {/* here i used some Inline CSS */}
                <h1 style={{textAlign:"center", 
                background:"rgb(235, 125, 125)",
                padding:"0.3rem",
                textDecoration:"none",
                margin:0}}>
                    {/* "/" it will render the same page */}
                    <a href="/">GaanaBajao</a> 
                </h1>
            </div>
        </>
    )
}

export default HeadingTag
