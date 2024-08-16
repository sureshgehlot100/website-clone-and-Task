import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Places({ place, qyt }) {
    console.log(place, qyt)
    return (
        <>
            <div className='col border rounded collectionBox g-1 m-auto border-1 mt-5 p-2 ' style={{ height: "100px",width:"450px"}}>
                <div className='d-flex flex-column justify-content-end align-items-start h-100'>
                    <div className='' style={{ fontSize: "33px" }}>{place}</div>
                    <div className='' style={{ fontSize: "24px" }}>{qyt} <IoMdArrowDropright /> </div>
                </div>
            </div>
        </>
    )
}

export default Places