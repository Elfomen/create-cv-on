import './BackDrop.css'
import React , { useState } from 'react'

function BackDrop({ show , setShow }){
    return(
        show ? <div className="backdrop" onClick={setShow}></div> : <div></div>
    )
}

export default BackDrop