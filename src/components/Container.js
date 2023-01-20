import React, { useState } from 'react'

export default function Container(props){
    
    const [text,textHandle] = useState("Default Text");
    const handleChange= (event)=>{
        textHandle(event.target.value);
    }
    document.body.style.backgroundColor = 'gray'
return(
<>

<div className="container mb-6 " >
    <textarea className="form-control" placeholder={text} onChange={handleChange} ></textarea>
</div>
</>
);}