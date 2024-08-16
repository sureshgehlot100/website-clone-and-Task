import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Collections({title,bg,places}) {
    console.log(title,bg,places)
  return (
    <>
        <div className='col border rounded collectionBox g-1' style={{bg:{bg}, height:"300px"}}>
            <div className='d-flex flex-column justify-content-end align-items-start h-100'>
                <div className='border' style={{fontSize:"18px"}}>{title}</div>
                <div className='border' style={{fontSize:"14px"}}>{places} <IoMdArrowDropright /> </div>
            </div>
        </div>
    </>
  )
}

export default Collections