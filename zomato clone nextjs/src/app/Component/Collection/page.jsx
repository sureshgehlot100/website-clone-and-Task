import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Collections({ title, bg, places }) {
  console.log(bg)
  return (
    <>
      <div className='col border rounded collectionBox g-1' style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', 
        height: "300px"
      }}>
        <div className='d-flex flex-column justify-content-end align-items-start h-100'>
          <div className=' text-white' style={{ fontSize: "17px" }}>{title}</div>
          <div className=' text-white' style={{ fontSize: "16px" }}>{places} <IoMdArrowDropright /> </div>
        </div>
      </div>
    </>
  )
}

export default Collections