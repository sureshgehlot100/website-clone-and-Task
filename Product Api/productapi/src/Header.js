import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
     <body className="bg-gray-100 antialiased font-sans">
        <header className="lg:px-16 px-8 bg-white flex flex-wrap items-center py-4 shadow-md">
          <div className="flex-1 flex justify-between items-center">
            <p className="text-xl">Product Api</p>
          </div>

          <label for="menu-toggle" className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li className="md:p-4 py-3 px-0 block cursor-pointer"><Link to={"/"}>Home</Link></li>
                <li className="md:p-4 py-3 px-0 block cursor-pointer">
                  <Link to={"/About"}>AboutUs</Link>
                   
                </li>
                <li className="md:p-4 py-3 px-0 block cursor-pointer">
                  <Link to={"/Cart"}>Cart</Link></li>
                <button className="md:p-4 py-3 px-0 block cursor-pointer bg-cyan-600 hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-full font-bold text-white">
                  Cart
                </button>
              </ul>
            </nav>
          </div>
        </header>
      </body>
    </>
  )
}
